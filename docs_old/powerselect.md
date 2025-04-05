<style type="text/css">
  .options {
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: #E5E7EB;
    width: 100%;
    line-height: 1.5rem;
    text-align: left;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
</style>


<enhanced-select>
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <!-- Add more options as needed -->
  </select>


  <style>
    .container {
      background-color: red;
    }
  </style>
</enhanced-select>

<script>
  class EnhancedSelect extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});

      this.showOptions = false;
      this.selectedOption = [];
      this.filteredOptions = [];

      this.css = `
        <style>
          .container {
            position: relative;
          }
          .main-input {
            background: #191919;
          }
          .options {
            overflow-y: auto;
            position: absolute;
            right: 0;
            left: 0;
            z-index: 10;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            margin-top: 0.5rem;
            border-radius: 0.5rem;
            border-width: 1px;
            border-color: #E5E7EB;
            width: 16rem;
            background-color: #ffffff;
            transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
            transition-duration: 100ms;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            transform-origin: top;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            opacity: 0; 
          }
          .options.open {
            --transform-scale-x: 1;
            --transform-scale-y: 1;
            opacity: 1;
          }
        </style>
      `

      this.render();
      this.addEventListeners();
    }

    render() {
      const select = this.querySelector('select');
      console.log(select);
      const options = [...select.options];
      const optionElements = options.map(option => `<div class="option" data-value="${option.value}">${option.text}</div>`).join('');

      const markup = `
      ${this.css}
      <div class="container">
        <input type="text" class="main-input" placeholder="Search..." name="${select.name}" >
        <div class="options ${this.showOptions ? 'open' : ''} ">
          ${optionElements}
        </div >
      </div >
    `;

      this.shadowRoot.innerHTML = markup;
    }

    addEventListeners() {
      const searchBox = this.shadowRoot.querySelector('.main-input');
      const optionsContainer = this.shadowRoot.querySelector('.options');
      const options = optionsContainer.querySelectorAll('.option');

      options.forEach(option => {
        option.addEventListener('click', e => {
          console.log('clicked');
          if (e.target.classList.contains('option')) {
            const select = this.querySelector('select');
            const selectedValue = e.target.dataset.value;

            // Update the select element's value
            select.value = selectedValue;
            select.dispatchEvent(new Event('change'));

            // Update the visual representation
            options.forEach(opt => opt.classList.remove('selected'));
            e.target.classList.add('selected');
          }
        });
      });

      searchBox.addEventListener('focus', e => {
        this.showOptions = !this.showOptions;
        this.render();
      });

      searchBox.addEventListener('input', e => {
        const searchValue = e.target.value.toLowerCase();
        options.forEach(option => {
          const optionText = option.textContent.toLowerCase();
          if (optionText.includes(searchValue)) {
            option.style.display = 'block';
          } else {
            option.style.display = 'none';
          }
        });
      });

      optionsContainer.addEventListener('click', e => {
        const select = this.querySelector('select');
        const selectedValue = e.target.dataset.value;

        // Update the select element's value
        select.value = selectedValue;
        select.dispatchEvent(new Event('change'));

        // Update the visual representation
        options.forEach(option => option.classList.remove('selected'));
        e.target.classList.add('selected');
      });
    }
  }

  customElements.define('enhanced-select', EnhancedSelect);
</script>