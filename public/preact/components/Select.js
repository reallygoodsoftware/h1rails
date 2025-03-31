import { html, render, useState, useRef, useEffect } from 'https://esm.sh/htm/preact/standalone';

export default function Select(props) {
  const element = props.element;
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  // Use useRef instead of a plain object
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  
  let options = [];
  
  // Get options from data-options attribute
  const optionsStr = element.getAttribute('data-options');
  if (optionsStr) {
    try {
      options = JSON.parse(optionsStr);
    } catch (e) {
      console.error('Invalid options format:', e);
    }
  }
  
  // Filter options based on search term
  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
    // Reset highlighted index when search changes
    setHighlightedIndex(0);
  };
  
  const handleOptionSelect = (option) => {
    // Check if the option is already selected
    const isAlreadySelected = selectedOptions.some(item => item.value === option.value);
    
    if (isAlreadySelected) {
      // Remove the option if already selected (toggle off)
      setSelectedOptions(selectedOptions.filter(item => item.value !== option.value));
    } else {
      // Add the new option to selected options (toggle on)
      setSelectedOptions([...selectedOptions, option]);
    }
    
    // Clear search term
    setSearchTerm('');
    
    // Refocus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  const removeSelectedOption = (option) => {
    setSelectedOptions(selectedOptions.filter(item => item.value !== option.value));
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        // Move highlight down
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        e.preventDefault();
        break;
      
      case 'ArrowUp':
        // Move highlight up
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
        e.preventDefault();
        break;
      
      case 'Enter':
        // Select the highlighted option
        if (filteredOptions.length > 0 && highlightedIndex >= 0) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
          e.preventDefault();
        }
        break;
      
      case 'Escape':
        setIsOpen(false);
        e.preventDefault();
        break;
        
      default:
        break;
    }
  };

  // Reset highlighted index when filtered options change
  useEffect(() => {
    if (filteredOptions.length > 0 && highlightedIndex >= filteredOptions.length) {
      setHighlightedIndex(0);
    }
  }, [filteredOptions, highlightedIndex]);

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Cleanup the event listener when component unmounts or dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return html`
    <div class="ui-betterselect" ref=${selectRef}>
      <div class="--tags">
        ${selectedOptions.map(option => html`
          <div class="--tag">
            <span>${option.label}</span>
            <button 
              type="button"
              class="--remove"
              onClick=${() => removeSelectedOption(option)}
              aria-label="Remove ${option.label}"
            >
            </button>
          </div>
        `)}
      </div>
      <div class=${isOpen ? "--dropdown --open" : "--dropdown --closed"}>
        <input 
          type="text" 
          class="--input" 
          placeholder="Type to search..." 
          onClick=${toggleDropdown}
          onInput=${handleInputChange}
          onKeyDown=${handleKeyDown}
          value=${searchTerm}
          ref=${inputRef}
        />
        <div class="--option-list" role="listbox">
          ${filteredOptions.length > 0 ? 
            filteredOptions.map((option, index) => {
              const isSelected = selectedOptions.some(item => item.value === option.value);
              const isHighlighted = index === highlightedIndex;
              return html`
                <button 
                  type="button"
                  class=${isSelected && isHighlighted 
                    ? "--item --selected --highlighted" 
                    : isSelected 
                      ? "--item --selected" 
                      : isHighlighted 
                        ? "--item --highlighted" 
                        : "--item"} 
                  role="option" 
                  aria-selected=${isSelected ? "true" : "false"}
                  data-value=${option.value}
                  onClick=${() => handleOptionSelect(option)}
                  onMouseEnter=${() => setHighlightedIndex(index)}
                >
                  <span>${option.label}</span>
                </button>
              `;
            }) : 
            html`<div class="--no-results">No matching options</div>`
          }
        </div>
      </div>
    </div>
  `;
}