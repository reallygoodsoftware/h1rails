import { html, render, useState, useEffect, useRef } from 'https://esm.sh/htm/preact/standalone';

// Define the Modal component
export function Modal({ modalId, content, size = 'md', isVisible, onClose }) {
  const contentRef = useRef(null);
  const modalClass = `ui-modal ${isVisible ? '--visible' : ''}`;
  const dialogClass = `--dialog --${size}`;
  
  // Support HTMX content
  useEffect(() => {
    if (isVisible && contentRef.current) {
      if (window.htmx) {
        window.htmx.process(contentRef.current);
      } else {
      }
    }
  }, [isVisible, content]);
  
  return html`
    <div class=${modalClass} role="dialog" aria-modal=${isVisible}>
      <div class="--overlay" onClick=${onClose}></div>
      <div class="--wrapper-outer">
        <div class="--wrapper-inner">
          <div class=${dialogClass}>
            <div id=${modalId} class="--modal-content" ref=${contentRef} dangerouslySetInnerHTML=${{ __html: content }}></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function Modals() {
  const [modals, setModals] = useState([]);
  let modalIdCounter = 0;
  
  // Function to load content from a URL
  const loadUrlContent = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch content');
      return await response.text();
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
          const loadedContent = await loadUrlContent(url);
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
    
    console.log("Enhanced modal system initialized");
    
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