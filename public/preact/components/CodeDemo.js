import { html, render, useState, useEffect } from 'https://esm.sh/htm/preact/standalone';

export default function CodeDemo(props) {
  const element = props.element;
  const [showCode, setShowCode] = useState(true);
  
  useEffect(() => {
    // Wait for highlight.js to be available
    if (window.hljs) {
      const codeElements = element.querySelectorAll('pre code');
      codeElements.forEach(block => {
        window.hljs.highlightElement(block);
      });
    }
  }, [showCode]);

  const toggleCode = () => {
    setShowCode(!showCode);
  };
  
  // Get the inner element HTML for the code display
  const innerElementHtml = element.querySelector('.--frame')?.innerHTML || '';
  
  // Format the HTML code for display (basic indentation and cleanup)
  const formatCode = (html) => {
    const lines = html.split('\n');
    // Find first non-empty line and count its leading spaces
    const firstLineIndent = lines.find(line => line.trim())?.match(/^\s*/)[0].length || 0;
    
    // Remove that many spaces from the start of each line if they exist
    return lines
      .map(line => line.slice(firstLineIndent))
      .join('\n')
      .replace(/^\n+|\n+$/g, ''); // Remove leading/trailing blank lines
  };
  
  const formattedCode = formatCode(innerElementHtml);
  
  return html`
    <div class="code-demo-wrapper">
      <button class="ui-button code-toggle" onClick=${toggleCode}>
        ${showCode ? 'Hide Code' : 'Show Code'}
      </button>
      <pre class="language-html ui-expander ${showCode ? '--expanded' : ''}" style="margin-top: 10px;">
        <code class="language-html">${formattedCode}</code>
      </pre>
    </div>
  `;
}