import { html, render, useState, useEffect } from 'https://esm.sh/htm/preact/standalone';

export function Toasts() {
  const [toasts, setToasts] = useState([]);
  
  // Function to add a new toast
  const addToast = (toast) => {
    // Generate a unique ID for the toast
    const id = Date.now().toString();
    const newToast = {
      id,
      title: toast.title || '',
      message: toast.message || '',
      disappearing: toast.disappearing !== false,
      animationClass: ''
    };
    
    setToasts(prevToasts => [...prevToasts, newToast]);
    return id;
  };
  
  // Function to remove a toast
  const removeToast = (id) => {
    setToasts(prevToasts => 
      prevToasts.map(toast => 
        toast.id === id 
          ? { ...toast, animationClass: '--animate-out' } 
          : toast
      )
    );
    
    // Completely remove the toast after animation completes
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, 1000);
  };
  
  // Initialize with server-side toasts if available
  useEffect(() => {
    const serverToasts = window.toasts || [];
    if (serverToasts.length) {
      const enhancedToasts = serverToasts.map(toast => ({
        ...toast,
        id: Date.now() + Math.random().toString(36).substring(2, 9),
        animationClass: ''
      }));
      setToasts(enhancedToasts);
    }
    
    // Immediately expose the addToast function to the window
    window.addToast = addToast;
    
    return () => {
      // Clean up function in case component unmounts
      window.addToast = null;
    };
  }, []); // Empty dependency array ensures this runs only once on mount
  
  // Handle toast animations
  useEffect(() => {
    // Animate in each toast with a delay based on its position
    const animationTimers = [];
    
    toasts.forEach((toast, index) => {
      if (!toast.animationClass) {
        const timer = setTimeout(() => {
          setToasts(prevToasts => 
            prevToasts.map((t, i) => 
              i === index 
                ? { ...t, animationClass: '--animate-in' } 
                : t
            )
          );
          
          // Auto-dismiss disappearing toasts
          if (toast.disappearing) {
            const dismissTimer = setTimeout(() => {
              removeToast(toast.id);
            }, 2000);
            animationTimers.push(dismissTimer);
          }
        }, 100);
        console.log('clicked');
        console.log( (index + 1) * 200);
        animationTimers.push(timer);
      }
    });
    
    // Clean up timers on component unmount or when toasts change
    return () => {
      animationTimers.forEach(timer => clearTimeout(timer));
    };
  }, [toasts]);
  
  return html`
    <div class="ui-toasts">
      ${toasts.map((toast) => html`
        <div class="--toast ${toast.animationClass}" role="alert" key=${toast.id}>
          <div class="--wrapper">
            <div class="--content">
              <div 
                class="--close-button" 
                onClick=${() => removeToast(toast.id)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <span class="--title">${toast.title}</span>
              <span class="--message">${toast.message}</span>
            </div>
          </div>
        </div>
      `)}
    </div>
  `;
}