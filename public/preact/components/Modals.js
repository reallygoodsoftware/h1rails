import { html, render, useState, useEffect, useRef } from 'https://esm.sh/htm/preact/standalone';

// Function to execute scripts in loaded content
const executeScripts = (container) => {
  if (!container) return;
  
  const scripts = container.querySelectorAll('script');
  scripts.forEach(script => {
    const newScript = document.createElement('script');
    
    // Copy attributes
    Array.from(script.attributes).forEach(attr => {
      newScript.setAttribute(attr.name, attr.value);
    });
    
    if (script.src) {
      // External script
      newScript.src = script.src;
    } else {
      // Inline script
      newScript.textContent = script.textContent;
    }
    
    // Replace the old script with the new one
    script.parentNode.replaceChild(newScript, script);
  });
};

// Define the Modal component
export function Modal({ modalId, content, size = 'md', isVisible, onClose }) {
  const contentRef = useRef(null);
  const modalClass = `ui-modal ${isVisible ? '--visible' : ''}`;
  const dialogClass = `--dialog --${size}`;
  
  // Support HTMX content and execute scripts
  useEffect(() => {
    if (isVisible && contentRef.current) {
      if (window.htmx) {
        window.htmx.process(contentRef.current); 
      }
      // Execute any scripts in the loaded content
      executeScripts(contentRef.current);
    }
  }, [isVisible, content]);
  
  return html`
    <div class=${modalClass} role="dialog" aria-modal=${isVisible}>
      <div class="--overlay" onClick=${onClose}></div>
      <div class="--wrapper-outer">
        <div class="--wrapper-inner">
          <div class=${dialogClass}>
            <div class="--close-button" onClick=${onClose}>
              <img src="/icons/heroicons/x-mark.svg" />
            </div>
            <div id="modal-container" class="--modal-content" ref=${contentRef} dangerouslySetInnerHTML=${{ __html: content }}></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function Modals() {
  const [modals, setModals] = useState([]);
  let modalIdCounter = 0;
  
  // Function to load content from a URL, with optional selector
  const loadUrlContent = async (url, remoteSelector) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch content');
      const text = await response.text();
      if (remoteSelector) {
        // Parse the HTML and extract the first element matching the selector
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const el = doc.querySelector(remoteSelector);
        if (el) {
          return el.outerHTML;
        } else {
          return `<p>Element not found for selector: ${remoteSelector}</p>`;
        }
      }
      return text;
    } catch (error) {
      console.error('Error loading content:', error);
      return `<p>Error loading content from ${url}</p>`;
    }
  };
  
  // Function to get content from a querySelector
  const getQuerySelectorContent = (selector) => {
    try {
      const element = document.querySelector(selector);
      if (!element) throw new Error(`Element not found: ${selector}`);
      return element.innerHTML;
    } catch (error) {
      console.error('Error getting content:', error);
      return `<p>Error getting content from selector "${selector}"</p>`;
    }
  };
  
  // Handle closing a modal
  const closeModal = (modalIdToClose) => {
    // First hide it
    setModals(prev => 
      prev.map(modal => 
        modal.modalId === modalIdToClose ? {...modal, isVisible: false} : modal
      )
    );
    
    // Then remove it after animation completes
    setTimeout(() => {
      setModals(prev => prev.filter(modal => modal.modalId !== modalIdToClose));
    }, 300);
  };
  
  // Setup the global functions
  useEffect(() => {
    // Create the global launch function with options object parameter
    window.launchModal = async (options = {}) => {
      
      // Use provided ID or generate a unique ID
      const modalId = options.id || `modal-${++modalIdCounter}`;
      
      // Extract options with defaults
      const { 
        url, 
        selector,
        remoteSelector,
        content: initialContent = '',
        size = 'md'
      } = options;
      
      // First create the modal (not visible yet)
      const newModal = {
        modalId,
        content: initialContent,
        size,
        isVisible: false
      };
      
      // Add to state
      setModals(prev => [...prev, newModal]);
      
      // Start loading content based on options
      let modalContent = initialContent;
      
      if (url) {
        // If URL specified, start loading (will update later)
        modalContent = '<p>Loading content...</p>';
      } else if (selector) {
        // If selector specified, get that content
        modalContent = getQuerySelectorContent(selector);
      }
      
      // Update initial content
      setModals(prev => 
        prev.map(modal => 
          modal.modalId === modalId ? {...modal, content: modalContent} : modal
        )
      );
      
      // Then make it visible (triggers animation)
      setTimeout(() => {
        setModals(prev => 
          prev.map(modal => 
            modal.modalId === modalId ? {...modal, isVisible: true} : modal
          )
        );
      }, 50);
      
      // If URL was specified, fetch the content and update
      if (url) {
        try {
          const loadedContent = await loadUrlContent(url, remoteSelector);
          setModals(prev => 
            prev.map(modal => 
              modal.modalId === modalId ? {...modal, content: loadedContent} : modal
            )
          );
        } catch (error) {
          console.error('Error loading URL content:', error);
        }
      }
      
      // Return the modal ID in case the caller wants to reference it
      return modalId;
    };
    
    // Create global closeModal function
    window.closeModal = (modalId) => {
      closeModal(modalId);
    };
    
    // Cleanup
    return () => {
      delete window.launchModal;
      delete window.closeModal;
    };
  }, []);
  
  return html`
    <div id="modal-root">
      ${modals.map(modal => html`
        <${Modal}
          key=${modal.modalId}
          modalId=${modal.modalId}
          content=${modal.content}
          size=${modal.size}
          isVisible=${modal.isVisible}
          onClose=${() => closeModal(modal.modalId)}
        />
      `)}
    </div>
  `;
}