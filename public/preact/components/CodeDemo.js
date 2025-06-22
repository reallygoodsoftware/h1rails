import { html, render, useState, useMemo } from 'https://esm.sh/htm/preact/standalone';

export default function CodeDemo(props) {
  const element = props.element;
  const [showCode, setShowCode] = useState(true);
  
  const innerElementHtml = element.querySelector('.--frame')?.innerHTML || '';
  
  const formatCode = (html) => {
    const lines = html.split('\n');
    const firstLineIndent = lines.find(line => line.trim())?.match(/^\s*/)[0].length || 0;
    
    return lines
      .map(line => line.slice(firstLineIndent))
      .join('\n')
      .replace(/^\n+|\n+$/g, '');
  };
  
  const formattedCode = formatCode(innerElementHtml);

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