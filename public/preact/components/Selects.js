import { html, render, useState, useRef, useEffect, useMemo, useCallback } from 'https://esm.sh/htm/preact/standalone';

// Documentation
{/* <div class="ui-combobox">
  <div data-component="select" 
    data-select-name="fruits"
    data-select-type="multiple"
    data-select-allow-create="true"
    data-select-default-values="orange,apple"
    data-select-options='[
        {
          "label": "Citrus Fruits",
          "options": [
            {"value": "orange", "label": "Orange"},
            {"value": "lemon", "label": "Lemon"},
            {"value": "lime", "label": "Lime"},
            {"value": "grapefruit", "label": "Grapefruit"}
          ]
        },
        {
          "label": "Berries",
          "options": [
            {"value": "strawberry", "label": "Strawberry"},
            {"value": "blueberry", "label": "Blueberry"},
            {"value": "raspberry", "label": "Raspberry"},
            {"value": "blackberry", "label": "Blackberry"}
          ]
        },
        {
          "label": "Tropical Fruits",
          "options": [
            {"value": "banana", "label": "Banana"},
            {"value": "mango", "label": "Mango"},
            {"value": "pineapple", "label": "Pineapple"},
            {"value": "coconut", "label": "Coconut"}
          ]
        },
        {"value": "apple", "label": "Apple"},
        {"value": "pear", "label": "Pear"}
    ]'>
  </div>
</div> */}

export default function Combobox(props) {
  const element = props.element;
  
  // Get configuration from data attributes
  const selectName = element.getAttribute('data-select-name') || '';
  const selectType = element.getAttribute('data-select-type') || 'single';
  const allowCreate = element.getAttribute('data-select-allow-create') === 'true';
  const tagsPosition = element.getAttribute('data-select-tags-position') || 'hidden';
  const showCounter = element.getAttribute('data-select-show-counter') !== 'false';
  const defaultValues = element.getAttribute('data-select-default-values')?.split(',') || [];
  
  const isMultiple = selectType === 'multiple';
  
  // Component state (that doesn't depend on options)
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [userCreatedOptions, setUserCreatedOptions] = useState([]);
  
  // Refs
  const comboboxRef = useRef(null);
  const inputRef = useRef(null);
  
  // Parse options first
  const options = useMemo(() => {
    try {
      const optionsStr = element.getAttribute('data-select-options');
      return optionsStr ? JSON.parse(optionsStr) : [];
    } catch (e) {
      console.error('Invalid options format:', e);
      return [];
    }
  }, []);
  
  // Process options to handle groups
  const processedOptions = useMemo(() => {
    const flattenedOptions = [];
    
    options.forEach(item => {
      if (item.options && Array.isArray(item.options)) {
        // This is a group
        item.options.forEach(option => {
          flattenedOptions.push({
            ...option,
            group: item.label
          });
        });
      } else {
        // This is a regular option
        flattenedOptions.push(item);
      }
    });
    
    return flattenedOptions;
  }, [options]);
  
  // Combine predefined options with user-created ones
  const allOptions = useMemo(() => {
    return [...processedOptions, ...userCreatedOptions];
  }, [processedOptions, userCreatedOptions]);

  // Now we can initialize selectedOptions using allOptions
  const [selectedOptions, setSelectedOptions] = useState(() => {
    return defaultValues
      .map(value => allOptions.find(opt => opt.value === value))
      .filter(Boolean);
  });
  
  // Extract all unique groups
  const groups = useMemo(() => {
    return [...new Set(allOptions
      .filter(option => option.group)
      .map(option => option.group))];
  }, [allOptions]);
  
  // Filter options based on search term - this is a hot path that benefits from memoization
  const filteredOptions = useMemo(() => {
    return allOptions.filter(option => 
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allOptions, searchTerm]);
  
  // Check if current search term could be a new option
  const showCreateOption = allowCreate && 
    searchTerm.trim() !== '' && 
    !allOptions.some(option => 
      option.label.toLowerCase() === searchTerm.toLowerCase()
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
  
  const createNewOption = () => {
    const newOption = {
      value: searchTerm.toLowerCase().replace(/\s+/g, '-'),
      label: searchTerm.trim()
    };
    setUserCreatedOptions([...userCreatedOptions, newOption]);
    handleOptionSelect(newOption);
  };
  
  // This function is called when selecting options, worth optimizing
  const handleOptionSelect = useCallback((option) => {
    if (isMultiple) {
      // For multiple selection mode
      const isAlreadySelected = selectedOptions.some(item => item.value === option.value);
      
      if (isAlreadySelected) {
        // Remove the option if already selected
        setSelectedOptions(selectedOptions.filter(item => item.value !== option.value));
      } else {
        // Add the new option to selected options
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      // For single selection mode, replace the current selection
      setSelectedOptions([option]);
      setIsOpen(false);
    }
    
    // Clear search term
    setSearchTerm('');
    
    // Refocus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMultiple, selectedOptions]);
  
  const removeSelectedOption = (option) => {
    setSelectedOptions(selectedOptions.filter(item => item.value !== option.value));
  };
  
  // Handle keyboard navigation - complex event handler, worth optimizing
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    const totalOptions = filteredOptions.length + (showCreateOption ? 1 : 0);

    switch (e.key) {
      case 'ArrowDown':
        // Move highlight down
        setHighlightedIndex(prev => 
          prev < totalOptions - 1 ? prev + 1 : prev
        );
        e.preventDefault();
        break;
      
      case 'ArrowUp':
        // Move highlight up
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
        e.preventDefault();
        break;
      
      case 'Enter':
        // Handle "Create new" option
        if (showCreateOption && highlightedIndex === filteredOptions.length) {
          createNewOption();
        } 
        // Select the highlighted option
        else if (filteredOptions.length > 0 && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
        }
        e.preventDefault();
        break;
      
      case 'Escape':
        setIsOpen(false);
        e.preventDefault();
        break;
        
      default:
        break;
    }
  }, [isOpen, filteredOptions, showCreateOption, highlightedIndex, createNewOption, handleOptionSelect]);

  // Reset highlighted index when filtered options change
  useEffect(() => {
    const totalOptions = filteredOptions.length + (showCreateOption ? 1 : 0);
    if (totalOptions > 0 && highlightedIndex >= totalOptions) {
      setHighlightedIndex(0);
    }
  }, [filteredOptions, showCreateOption, highlightedIndex]);

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  // Generate value for hidden input
  const getSelectValue = () => {
    if (isMultiple) {
      return selectedOptions.map(opt => opt.value).join(',');
    } else {
      return selectedOptions.length > 0 ? selectedOptions[0].value : '';
    }
  };
  
  // Render tags based on position
  const renderTags = () => {
    if (tagsPosition === 'hidden' || selectedOptions.length === 0) {
      return null;
    }
    
    return html`
      <div class="--tags">
        ${selectedOptions.map(option => html`
          <div class="--tag" key=${option.value}>
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
    `;
  };
  
  return html`
    <div class="ui-combobox ${isOpen ? '--open' : ''}" ref=${comboboxRef}>
      ${selectName && html`
        <input 
          type="hidden" 
          name=${selectName} 
          value=${getSelectValue()} 
        />
      `}
      ${tagsPosition === 'before' && renderTags()}
      <input 
        type="text" 
        class="--trigger" 
        placeholder="Type to search..." 
        onClick=${toggleDropdown}
        onInput=${handleInputChange}
        onKeyDown=${handleKeyDown}
        value=${searchTerm}
        ref=${inputRef}
      />
      ${showCounter && selectedOptions.length > 0 && html`
        <span class="--counter">${selectedOptions.length}</span>
      `}
      <div class="--drawer" role="listbox">
        ${filteredOptions.length > 0 || showCreateOption ? 
          html`
            ${groups.length > 0 ? 
              groups.map(group => {
                const groupOptions = filteredOptions.filter(option => option.group === group);
                if (groupOptions.length === 0) return null;
                
                return html`
                  <div class="--group" key=${group}>
                    <div class="--group-label">${group}</div>
                    ${groupOptions.map((option) => {
                      const index = filteredOptions.indexOf(option);
                      const isSelected = selectedOptions.some(item => item.value === option.value);
                      const isHighlighted = index === highlightedIndex;
                      return html`
                        <button 
                          type="button"
                          key=${option.value}
                          class="--item ${isSelected ? '--selected' : ''} ${isHighlighted ? '--highlighted' : ''}" 
                          role="option" 
                          aria-selected=${isSelected ? "true" : "false"}
                          data-value=${option.value}
                          onClick=${() => handleOptionSelect(option)}
                          onMouseEnter=${() => setHighlightedIndex(index)}
                        >
                          ${option.iconPath && html`
                            <img src=${option.iconPath} class="--icon" alt="" />
                          `}
                          <span>${option.label}</span>
                        </button>
                      `;
                    })}
                  </div>
                `;
              })
            : null}
            
            ${filteredOptions.filter(option => !option.group).length > 0 ? 
              html`
                <div class="--ungrouped">
                  ${filteredOptions.filter(option => !option.group).map((option) => {
                    const index = filteredOptions.indexOf(option);
                    const isSelected = selectedOptions.some(item => item.value === option.value);
                    const isHighlighted = index === highlightedIndex;
                    return html`
                      <button 
                        type="button"
                        key=${option.value}
                        class="--item ${isSelected ? '--selected' : ''} ${isHighlighted ? '--highlighted' : ''}" 
                        role="option" 
                        aria-selected=${isSelected ? "true" : "false"}
                        data-value=${option.value}
                        onClick=${() => handleOptionSelect(option)}
                        onMouseEnter=${() => setHighlightedIndex(index)}
                      >
                        ${option.iconPath && html`
                          <img src=${option.iconPath} class="--icon" alt="" />
                        `}
                        <span>${option.label}</span>
                      </button>
                    `;
                  })}
                </div>
              ` : null
            }
            
            ${showCreateOption && html`
              <button 
                type="button"
                class="--item --create" 
                onClick=${createNewOption}
                onMouseEnter=${() => setHighlightedIndex(filteredOptions.length)}
              >
                <span>Create "${searchTerm}"</span>
              </button>
            `}
          ` : 
          html`<div class="--no-results">No matching options</div>`
        }
      </div>
      ${tagsPosition === 'after' && renderTags()}
    </div>
  `;
}