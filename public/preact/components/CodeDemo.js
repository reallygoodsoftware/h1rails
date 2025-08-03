import { html, render, useState, useMemo } from 'https://esm.sh/htm/preact/standalone';

export default function CodeDemo(props) {
  const element = props.element;
  const [showCode, setShowCode] = useState(true);
  
  const innerElementHtml = element.querySelector('.--frame')?.innerHTML || '';
  
  const stripAttributes = (htmlString) => {
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    
    // Function to recursively remove attributes from all elements
    const removeAttributesFromElement = (element) => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        // Get all attribute names to avoid modifying the collection while iterating
        const attributeNames = Array.from(element.attributes).map(attr => attr.name);
        
        attributeNames.forEach(attrName => {
          // Remove class attributes and any data-* attributes
          if (attrName === 'class' || attrName.startsWith('data-')) {
            element.removeAttribute(attrName);
          }
        });
        
        // Recursively process child elements
        Array.from(element.children).forEach(child => {
          removeAttributesFromElement(child);
        });
      }
    };
    
    // Process all child elements
    Array.from(tempDiv.children).forEach(child => {
      removeAttributesFromElement(child);
    });
    
    return tempDiv.innerHTML;
  };
  
  const formatCode = (html) => {
    const lines = html.split('\n');
    const firstLineIndent = lines.find(line => line.trim())?.match(/^\s*/)[0].length || 0;
    
    return lines
      .map(line => line.slice(firstLineIndent))
      .join('\n')
      .replace(/^\n+|\n+$/g, '');
  };
  
  const strippedHtml = stripAttributes(innerElementHtml);
  const formattedCode = formatCode(strippedHtml);

  const highlightedCode = useMemo(() => {
    if (window.hljs) {
      return window.hljs.highlight(formattedCode, { language: 'html' }).value;
    }
    return formattedCode;
  }, [formattedCode]);

  const toggleCode = () => {
    setShowCode(!showCode);
  };
  
  return html`
    <div class="code-demo-wrapper ui-styled-text-unset">
      <button class="ui-button --sm code-toggle" onClick=${toggleCode}>
        ${showCode ? 'Hide Code' : 'Show Code'}
      </button>
      <pre class="language-html ui-expander ${showCode ? '--expanded' : ''}" style="margin-top: 10px;">
        <code 
          class="language-html"
          dangerouslySetInnerHTML=${{ __html: highlightedCode }}
        >
        </code>
      </pre>
    </div>
  `;
}