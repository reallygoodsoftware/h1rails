import { html, render, useState, useEffect, useRef } from 'https://esm.sh/htm/preact/standalone';
import { basicSetup, EditorView } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html as htmlLang } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { EditorState } from "@codemirror/state";
import { keymap } from "@codemirror/view";

export default function CodeEditor(props) {
  const element = props.element;
  const [files, setFiles] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const editorContainerRef = useRef(null);
  const viewRef = useRef(null);
  
  // Get language extension based on file extension
  const getLanguageExtension = (path) => {
    const ext = path.split('.').pop().toLowerCase();
    switch (ext) {
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
        return javascript();
      case 'html':
      case 'htm':
      case 'erb':
        return htmlLang();
      case 'css':
        return css();
      case 'json':
        return json();
      case 'md':
        return markdown();
      default:
        return javascript(); // Default to JavaScript
    }
  };
  
  // Function to fetch file content
  const fetchFileContent = async (path) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/livecode/api/file?path=${encodeURIComponent(path)}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      const data = await response.text();
      
      return data;
    } catch (err) {
      setError(`Error fetching file: ${err.message}`);
      return '';
    } finally {
      setLoading(false);
    }
  };
  
  // Function to save file content
  const saveFileContent = async (path, content) => {
    if (!path) return;
    
    setSaving(true);
    setError(null);
    
    try {
      const response = await fetch(`/livecode/api/file?path=${encodeURIComponent(path)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: content
      });
      
      if (!response.ok) {
        throw new Error(`Failed to save file: ${response.statusText}`);
      }
      
      // Update the file state to reflect it's no longer dirty
      setFiles(prevFiles => {
        const newFiles = [...prevFiles];
        if (activeTabIndex !== null) {
          newFiles[activeTabIndex] = {
            ...newFiles[activeTabIndex],
            isDirty: false
          };
        }
        return newFiles;
      });
      
      // Show save success indicator briefly
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
      }, 2000);
      
      return true;
    } catch (err) {
      setError(`Error saving file: ${err.message}`);
      return false;
    } finally {
      setSaving(false);
    }
  };
  
  // Function to handle save command (Cmd+S / Ctrl+S)
  const handleSave = () => {
    if (activeTabIndex === null) return;
    
    const currentFile = files[activeTabIndex];
    if (!currentFile) return;
    
    saveFileContent(currentFile.path, currentFile.content);
  };
  
  // Function to open a file tab
  const openFile = async (path) => {
    const existingIndex = files.findIndex(file => file.path === path);
    
    if (existingIndex >= 0) {
      setActiveTabIndex(existingIndex);
      return;
    }
    
    const content = await fetchFileContent(path);
    
    const newFile = {
      path,
      content,
      isDirty: false
    };
    
    setFiles(prevFiles => {
      const updatedFiles = [...prevFiles, newFile];
      setActiveTabIndex(updatedFiles.length - 1);
      return updatedFiles;
    });
  };
  
  // Function to close a tab
  const closeTab = (index, e) => {
    e.stopPropagation();
    
    // Check if file is dirty and confirm before closing
    if (files[index].isDirty) {
      if (!confirm(`File "${getFileName(files[index].path)}" has unsaved changes. Close anyway?`)) {
        return;
      }
    }
    
    setFiles(prevFiles => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      
      if (newFiles.length === 0) {
        setActiveTabIndex(null);
      } else if (activeTabIndex === index) {
        setActiveTabIndex(index === 0 ? 0 : index - 1);
      } else if (activeTabIndex > index) {
        setActiveTabIndex(activeTabIndex - 1);
      }
      
      return newFiles;
    });
  };
  
  // Function to update file content
  const updateFileContent = (index, newContent) => {
    setFiles(prevFiles => {
      const newFiles = [...prevFiles];
      newFiles[index] = {
        ...newFiles[index],
        content: newContent,
        isDirty: true
      };
      return newFiles;
    });
  };
  
  // Get filename from path
  const getFileName = (path) => {
    return path.split('/').pop();
  };
  
  // Set up editor when active tab changes or files are loaded
  useEffect(() => {
    if (activeTabIndex === null || !editorContainerRef.current) return;
    
    const currentFile = files[activeTabIndex];
    if (!currentFile) return;
    
    // Clean up previous view if it exists
    if (viewRef.current) {
      viewRef.current.destroy();
      viewRef.current = null;
    }
    
    // Create save command keymap
    const saveKeymap = keymap.of([
      {
        key: "Mod-s", 
        run: () => {
          handleSave();
          return true;
        },
        preventDefault: true
      }
    ]);
    
    // Create a new state for the editor
    const state = EditorState.create({
      doc: currentFile.content,
      extensions: [
        basicSetup,
        getLanguageExtension(currentFile.path),
        saveKeymap,
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            updateFileContent(activeTabIndex, update.state.doc.toString());
          }
        }),
        // Add explicit height management
        EditorView.theme({
          "&": {height: "100%"},
          ".cm-scroller": {overflow: "auto"},
          ".cm-content": {minHeight: "100%"}
        })
      ]
    });
    
    // Create a new editor view
    const view = new EditorView({
      state,
      parent: editorContainerRef.current
    });
    
    viewRef.current = view;
    
    // Force layout recalculation after a short delay
    setTimeout(() => {
      if (viewRef.current) {
        viewRef.current.requestMeasure();
      }
    }, 50);
  }, [activeTabIndex, files.length]);
  
  // Setup global keyboard shortcut for save
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Cmd+S (Mac) or Ctrl+S (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault(); // Prevent browser's save dialog
        handleSave();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTabIndex, files]);
  
  // Setup resize handling for editor
  useEffect(() => {
    const handleResize = () => {
      if (viewRef.current) {
        viewRef.current.requestMeasure();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Check container size and apply styles if needed
    if (element) {
      // Ensure the parent element has a defined height
      if (!element.style.height || element.style.height === 'auto') {
        element.style.height = '500px'; // Default height if none set
      }
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [element]);
  
  // Initialize the global function to add files
  useEffect(() => {
    window.addCodeEditorFile = (path) => {
      openFile(path);
    };
    
    return () => {
      delete window.addCodeEditorFile;
    };
  }, []);
  
  return html`
    <div class="ui-codeeditor">
      <div class="--tabs">
        ${files.map((file, index) => html`
          <div 
            class=${activeTabIndex === index ? "--tab --active" : "--tab"} 
            onClick=${() => setActiveTabIndex(index)}
          >
            <span class="--filename">${getFileName(file.path)}</span>
            ${file.isDirty ? html`<span class="--dirty-indicator">●</span>` : null}
            <button 
              class="--close-btn" 
              onClick=${(e) => closeTab(index, e)}
              aria-label="Close tab"
            >×</button>
          </div>
        `)}
        <div class="--tab-actions">
          ${activeTabIndex !== null && files.length > 0 ? html`
            <button 
              class=${saving ? "--save-btn --saving" : saveSuccess ? "--save-btn --success" : "--save-btn"}
              onClick=${handleSave}
              disabled=${saving || !files[activeTabIndex]?.isDirty}
              title="Save (Cmd+S)"
            >
              ${saving ? "Saving..." : saveSuccess ? "Saved!" : "Save"}
            </button>
          ` : null}
        </div>
      </div>
      
      <div class="--editor-container">
        ${loading ? html`<div class="--loading">Loading...</div>` : null}
        ${error ? html`<div class="--error">${error}</div>` : null}
        ${activeTabIndex !== null && files.length > 0 ? 
          html`<div class="--editor" ref=${editorContainerRef}></div>` : 
          html`<div class="--empty-state">Open a file to start editing</div>`
        }
      </div>
    </div>
  `;
}