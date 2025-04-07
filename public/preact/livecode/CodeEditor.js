import { html, render, useState, useEffect, useRef } from 'https://esm.sh/htm/preact/standalone';

export function CodeEditor(props) {
  const element = props.element;
  const [files, setFiles] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cursor, setCursor] = useState({ line: 0, ch: 0 });
  const editorRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const editorWrapperRef = useRef(null);
  
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
    
    setFiles(prevFiles => [...prevFiles, newFile]);
    setActiveTabIndex(files.length);
  };
  
  // Function to close a tab
  const closeTab = (index, e) => {
    e.stopPropagation();
    
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
  
  // Handle content changes
  const handleContentChange = (e) => {
    if (activeTabIndex !== null) {
      updateFileContent(activeTabIndex, e.target.value);
      updateLineNumbers();
      
      // Make sure the editor auto-expands as needed
      if (editorRef.current) {
        const lineCount = e.target.value.split('\n').length;
        const lineHeight = parseFloat(getComputedStyle(editorRef.current).lineHeight);
        const paddingTop = parseFloat(getComputedStyle(editorRef.current).paddingTop);
        const paddingBottom = parseFloat(getComputedStyle(editorRef.current).paddingBottom);
        
        // Set height based on content
        const minHeight = (lineCount * lineHeight) + paddingTop + paddingBottom;
        editorRef.current.style.height = `${minHeight}px`;
      }
    }
  };
  
  // Get filename from path
  const getFileName = (path) => {
    return path.split('/').pop();
  };
  
  // Get file extension for syntax highlighting
  const getFileExtension = (path) => {
    return path.split('.').pop().toLowerCase();
  };
  
  // Initialize the global function to add files
  useEffect(() => {
    window.addCodeEditorFile = (path) => {
      openFile(path);
    };
    
    return () => {
      delete window.addCodeEditorFile;
    };
  }, []);
  
  // Update line numbers when content changes
  const updateLineNumbers = () => {
    if (!lineNumbersRef.current || activeTabIndex === null) return;
    
    const content = files[activeTabIndex]?.content || '';
    const lines = content.split('\n').length;
    
    // Ensure enough line numbers
    const lineCount = Math.max(lines, 1); // Minimum of 1 line
    
    // Generate line numbers
    const lineNumbers = Array(lineCount)
      .fill()
      .map((_, i) => `<div class="--line">${i + 1}</div>`)
      .join('');
    
    lineNumbersRef.current.innerHTML = lineNumbers;
    
    // Adjust the textarea size to match the content
    if (editorRef.current) {
      const lineHeight = parseFloat(getComputedStyle(editorRef.current).lineHeight);
      const paddingTop = parseFloat(getComputedStyle(editorRef.current).paddingTop);
      const paddingBottom = parseFloat(getComputedStyle(editorRef.current).paddingBottom);
      
      // Set a minimum height based on the number of lines
      const minHeight = (lineCount * lineHeight) + paddingTop + paddingBottom;
      editorRef.current.style.height = `${minHeight}px`;
    }
  };
  
  // Sync scrolling between line numbers and content
  const handleScroll = (e) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
    
    // For debugging
    console.log('Scroll position:', e.target.scrollTop);
  };
  
  // Handle tab key for indentation
  const handleKeyDown = (e) => {
    const textarea = e.target;
    
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      const value = textarea.value;
      
      // Insert tab at cursor
      textarea.value = value.substring(0, start) + '  ' + value.substring(end);
      
      // Move cursor after the tab
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      
      updateFileContent(activeTabIndex, textarea.value);
    }
  };
  
  // Apply syntax highlighting by directly setting content
  useEffect(() => {
    if (activeTabIndex === null || !editorRef.current) return;
    
    // Set the value of the textarea directly
    const content = files[activeTabIndex]?.content || '';
    if (editorRef.current.value !== content) {
      editorRef.current.value = content;
    }
    
    // Trigger resize by updating line numbers
    updateLineNumbers();
    
    // Ensure the editor wrapper properly shows the text height
    if (editorWrapperRef.current && editorRef.current) {
      // Make sure the scroll height is properly calculated
      setTimeout(() => {
        // Force a resize check after component is fully rendered
        updateLineNumbers();
      }, 10);
    }
  }, [activeTabIndex, files]);
  
  // Track cursor position
  const handleSelect = (e) => {
    const textarea = e.target;
    const value = textarea.value;
    
    const linesBeforeCursor = value.substring(0, textarea.selectionStart).split('\n');
    const currentLine = linesBeforeCursor.length;
    const currentChar = linesBeforeCursor[linesBeforeCursor.length - 1].length;
    
    setCursor({
      line: currentLine,
      ch: currentChar
    });
  };
  
  return html`
    <div class="ui-code-editor">
      <div class="--tabs">
        ${files.map((file, index) => html`
          <div 
            key=${file.path} 
            class=${activeTabIndex === index ? '--tab --active' : '--tab'}
          >
            <button 
              class="--tab-button"
              onClick=${() => setActiveTabIndex(index)}
            >
              ${getFileName(file.path)}
              ${file.isDirty ? html`<span class="--dirty">•</span>` : null}
            </button>
            <button 
              class="--close" 
              onClick=${(e) => closeTab(index, e)}
              aria-label="Close tab"
            >×</button>
          </div>
        `)}
      </div>
      
      <div class="--content">
        ${loading ? html`<div class="--loading">Loading...</div>` : null}
        ${error ? html`<div class="--error">${error}</div>` : null}
        ${activeTabIndex !== null && files[activeTabIndex] ? html`
          <div class="--container">
            <div class="--line-numbers" ref=${lineNumbersRef}></div>
            <div class="--editor-wrapper" ref=${editorWrapperRef}>
              <textarea
                onInput=${handleContentChange}
                onKeyDown=${handleKeyDown}
                onScroll=${handleScroll}
                onSelect=${handleSelect}
                class="--textarea"
                ref=${editorRef}
                spellcheck="false"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                wrap="off"
              ></textarea>
            </div>
          </div>
          <div class="--statusbar">
            Ln ${cursor.line}, Col ${cursor.ch} | ${getFileExtension(files[activeTabIndex].path).toUpperCase()}
          </div>
        ` : html`
          <div class="--empty">No file open</div>
        `}
      </div>
    </div>
  `;
}