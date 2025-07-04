# 🎨 CSS Variables

Base Styles uses CSS variables to let you customize any element as you see fit. &#x20;

<pre class="language-css"><code class="lang-css">:root {
<strong>  /* Shared Core */
</strong>  --ui-shared-font-family: "Plus Jakarta Sans";
  --ui-shared-font-family-headings: "Plus Jakarta Sans";
  --ui-shared-color-alpha: #0090ff;
  --ui-shared-color-alpha-darkened-20: #0073cc;
  --ui-shared-color-alpha-foreground: #ffffff;
  --ui-button-border-width: 2px;
  --ui-input-border-width: 2px;
  --ui-shared-element-border-radius: 7px;

  /* Shared */
  --ui-shared-element-height: 40px;
  --ui-shared-element-height-sm: 32px;
  --ui-shared-element-height-xs: 24px;
  --ui-shared-element-padding: 0 16px;
  --ui-shared-element-padding-sm: 0 12px;
  --ui-shared-element-padding-xs: 0 8px;
  --ui-shared-element-border-color: var(--ui-color-gray-300);

  --ui-shared-font-weight-headings: ExtraBold;
  --ui-font-weight-bold: 600;
  --ui-shared-font-size-base: 16px;
  --ui-shared-font-size-sm: 14px;
  --ui-shared-font-size-xs: 12px;

  --ui-shared-icon-dimension: 24px;
  --ui-shared-icon-dimension-sm: 16px;
  --ui-shared-icon-dimension-xs: 13px;

  --ui-shared-content-padding: 20px;
  --ui-shared-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  --ui-shared-border-radius-rounded: 50px;
  --ui-shared-page-bg-color: #f8f8f8;
  --ui-shared-text-color-primary: var(--ui-color-gray-600);

  /* Colors */
  --ui-color-gray-50: #f9fafb;
  --ui-color-gray-100: #f3f4f6;
  --ui-color-gray-200: #e5e7eb;
  --ui-color-gray-300: #d1d5db;
  --ui-color-gray-400: #9ca3af;
  --ui-color-gray-500: #6b7280;
  --ui-color-gray-600: #4b5563;
  --ui-color-gray-700: #374151;
  --ui-color-gray-800: #1f2937;
  --ui-color-gray-900: #101827;
  --ui-color-red-50: #fef2f2;
  --ui-color-red-700: #b91c1b;
  --ui-color-red-600-10: #dc26251a;
  --ui-color-yellow-50: #fffbeb;
  --ui-color-yellow-800: #92400d;
  --ui-color-yellow-600-20: #d9770833;
  --ui-color-green-50: #ecfdf5;
  --ui-color-green-300: #6EE7B7;
  --ui-color-green-400: #34D399;
  --ui-color-green-700: #047857;
  --ui-color-green-600-20: #07966933;
  --ui-color-blue-50: #eff6ff;
  --ui-color-blue-700: #1c4ed8;
  --ui-color-blue-700-10: #1c4ed81a;

  /* Buttons */
  --ui-button-color-bg:         transparent;
  --ui-button-color-solid-bg:   var(--ui-shared-color-alpha);
  --ui-button-color-minimal-bg: var(--ui-color-gray-100);
  --ui-button-color-foreground: var(--ui-shared-text-color-primary);
  --ui-button-color-solid-foreground:   var(--ui-shared-color-alpha-foreground);
  --ui-button-color-minimal-foreground: var(--ui-shared-text-color-primary);
  --ui-button-color-bg-hover:        var(--ui-color-gray-100);
  --ui-button-border-color:         var(--ui-color-gray-200);
  --ui-button-border-color-solid:   var(--ui-input-border-color);
  --ui-button-border-color-minimal: transparent;
  --ui-button-height:    var(--ui-shared-element-height);
  --ui-button-height-sm: var(--ui-shared-element-height-sm);
  --ui-button-height-xs: var(--ui-shared-element-height-xs);
  --ui-button-font-size:    var(--ui-shared-font-size-base);
  --ui-button-font-size-sm: var(--ui-shared-font-size-sm);
  --ui-button-font-size-xs: var(--ui-shared-font-size-xs);
  --ui-button-padding:    var(--ui-shared-element-padding);
  --ui-button-padding-sm: var(--ui-shared-element-padding-sm);
  --ui-button-padding-xs: var(--ui-shared-element-padding-xs);
  --ui-button-border-radius: var(--ui-shared-element-border-radius);

  /* Inputs */
  --ui-input-placeholder-color: var(--ui-color-gray-400);
  --ui-input-padding:    0 10px;
  --ui-input-padding-small-screens: 0 8px;
  --ui-input-padding-sm: var(--ui-shared-element-padding-sm);
  --ui-input-padding-xs: var(--ui-shared-element-padding-xs);
  --ui-input-height:    var(--ui-shared-element-height);
  --ui-input-height-sm: var(--ui-shared-element-height-sm);
  --ui-input-height-xs: var(--ui-shared-element-height-xs);
  --ui-input-font-size:     var(--ui-shared-font-size-base);
  --ui-input-font-size-sm:  var(--ui-shared-font-size-sm);
  --ui-input-font-size-xs:  var(--ui-shared-font-size-xs);
  --ui-input-border-radius: var(--ui-shared-element-border-radius);
  --ui-input-border-color: var(--ui-color-gray-200);
  --ui-input-border-color-focus: var(--ui-shared-color-alpha);

  /* Modals */
  --ui-modal-overlay-color: rgba(0, 0, 0, 0.5);
  --ui-modal-overlay-opacity: 0.8;
  --ui-modal-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  --ui-modal-background-color: var(--ui-box-background);
  --ui-modal-border-radius: var(--ui-shared-element-border-radius);
  --ui-modal-padding: var(--ui-shared-content-padding);
  --ui-modal-max-width: 600px;
  --ui-modal-max-width-xs: 400px;
  --ui-modal-max-width-sm: 500px;
  --ui-modal-max-width-lg: 700px;
  --ui-modal-max-width-xl: 800px;
  --ui-modal-max-width-2xl: 1000px;

  /* Title Pair */
  --ui-title-pair-color-title: var(--ui-color-gray-900);
  --ui-title-pair-color-description: var(--ui-color-gray-500);
  --ui-title-pair-title-font-size: 14px;
  --ui-title-pair-title-line-height: 20px;
  --ui-title-pair-description-font-size: 14px;
  --ui-title-pair-description-line-height: 18px;
  --ui-title-pair-title-font-size-lg: 16px;
  --ui-title-pair-title-line-height-lg: 24px;
  --ui-title-pair-description-font-size-lg: 14px;
  --ui-title-pair-description-line-height-lg: 18px;
  --ui-title-pair-title-font-size-xl: 24px;
  --ui-title-pair-title-line-height-xl: 32px; 
  --ui-title-pair-description-font-size-xl: 14px;
  --ui-title-pair-description-line-height-xl: 20px;

  /* Table */
  --ui-table-line-height: 45px;

  --ui-table-thead-background: none;
  --ui-table-thead-border-bottom: 2px solid var(--ui-color-grey-300);

  --ui-table-cell-padding: 8px 5px;
  --ui-table-cell-border: transparent;
  --ui-table-cell-border-bottom: 1px solid var(--ui-color-grey-300);  
  --ui-table-striped-row-even-background-color: var(--ui-color-gray-100);

  /* Box */
  --ui-box-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  --ui-box-border: none;
  --ui-box-border-radius: 10px;
  --ui-box-padding: var(--ui-shared-content-padding);
  --ui-box-background: #fff;
  --ui-box-separator-border: 2px solid var(--ui-color-gray-100);

  /* Eyebrow */
  --ui-eyebrow-font-size: 10px;
  --ui-eyebrow-font-family: var(--ui-font-family-headings);
  --ui-eyebrow-letter-spacing: 0.5px;
  --ui-eyebrow-text-color: var(--ui-title-pair-color-description);

  /* Switch */
  --ui-switch-border-radius: var(--ui-border-radius-rounded);
  --ui-switch-bg-color: var(--ui-color-gray-200);
  --ui-switch-bg-color-hover: var(--ui-color-gray-300);
  --ui-switch-bg-color-enabled: var(--ui-color-green-400);
  --ui-switch-button-bg-color: var(--ui-color-gray-50);
  --ui-switch-width: 16px;
  --ui-switch-height: 20px;
  --ui-switch-button-dimension: 14px;
  --ui-switch-padding: 3px;
  --ui-switch-width-lg: 52px;
  --ui-switch-height-lg: 32px;
  --ui-switch-button-dimension-lg: 24px;
  
  /* Checkbox */
  --ui-checkbox-dimension: 20px;
  --ui-checkbox-border-width: var(--ui-input-border-width);
  --ui-checkbox-border-radius: var(--ui-border-radius);
  --ui-checkbox-bg-color: var(--ui-shared-color-alpha);
  --ui-checkbox-border-color: var(--ui-input-border-color);
  --ui-checkbox-text-color-checked: var(--ui-shared-color-alpha-foreground);

  /* Chip */
  --ui-chip-bg-color: transparent;
  --ui-chip-text-color: var(--ui-text-color-primary);
  --ui-chip-border-color: var(--ui-input-border-color);
  --ui-chip-border-width: 1px;
  --ui-chip-border-radius: var(--ui-shared-element-border-radius);
  --ui-chip-icon-dimension: 16px;
  --ui-chip-height: 28px;
  --ui-chip-padding: 8px;
  --ui-chip-height-sm: 24px;
  --ui-chip-height-lg: 32px;
  --ui-chip-padding-sm: 8px;
  --ui-chip-padding-lg: 8px;
  --ui-chip-icon-dimension-sm: 14px;
  --ui-chip-icon-dimension-lg: 18px;

  /* Sidebar */
  --ui-sidebar-border-width: 1px;
  --ui-sidebar-border-color: var(--ui-color-gray-200);
  --ui-sidebar-active-item-bg-color: var(--ui-shared-color-alpha);

  /* Tab Navigation */
  --ui-tabnav-border-width: 2px;
  --ui-tabnav-border-color-active: var(--ui-color-gray-800);

  /* Toasts */
  --ui-toasts-position-top: 20px;
  --ui-toasts-position-right: 20px;
  --ui-toasts-max-width: 300px;
  --ui-toasts-box-shadow: var(--ui-shared-box-shadow);
  --ui-toasts-border-radius: var(--ui-shared-element-border-radius);
  --ui-toasts-gap: 1.3rem;
  --ui-toasts-toast-padding: 1rem;
  --ui-toasts-toast-color-title: var(--ui-title-pair-color-title);
  --ui-toasts-toast-color-description: var(--ui-title-pair-color-description);

  /* Search Input */
  --ui-search-input-border-width: var(--ui-input-border-width);
  --ui-search-input-border-radius: 40px;

  /* Floating Labels */
  --ui-floating-label-color: var(--ui-color-gray-900);
  --ui-floating-label-color-placeholder: var(--ui-color-gray-400);
  --ui-floating-label-padding-left: 0.8rem;
  --ui-floating-label-collapsed-size: 0.75rem;
  --ui-floating-label-collapsed-padding: 2px 4px;
  --ui-floating-label-bg-color: #fff;

  /* Styled Text */
  --ui-styled-text-code-background-inline: #efefef;
  --ui-styled-text-code-color-inline: var(--ui-shared-text-color-primary);
  --ui-styled-text-code-background: #191919;
  --ui-styled-text-code-color: #fff;
  --ui-styled-text-code-border-radius: var(--ui-shared-element-border-radius);
  --ui-styled-text-link-color: var(--ui-color-blue-700);
  --ui-styled-text-link-text-decoration: underline;
  --ui-styled-text-link-text-decoration-thickness: 2px;
  --ui-styled-text-color: var(--ui-shared-text-color-primary);
  --ui-styled-text-blockquote-padding: 1rem;
  --ui-styled-text-blockquote-background: var(--ui-color-gray-100);
  --ui-styled-text-blockquote-border-radius: var(--ui-shared-element-border-radius);

  /* Tooltips */
  --ui-tooltip-background-color: var(--ui-color-gray-900);
  --ui-tooltip-text-color: #fff;
  --ui-tooltip-font-size: 0.85rem;
  --ui-tooltip-line-height: 1rem;
  --ui-tooltip-border-radius: var(--ui-shared-element-border-radius);
  --ui-tooltip-padding: 8px;
  --ui-tooltip-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

  /* Container */
  --ui-container-max-width: 1024px;
  --ui-container-max-width-xs: 480px;
  --ui-container-max-width-sm: 640px;
  --ui-container-max-width-md: 768px;
  --ui-container-max-width-lg:  1200px;
  --ui-container-max-width-xl: 1440px;
  --ui-container-max-width-2xl: 1536px;
  --ui-container-padding: 1rem;
  --ui-container-margin: 0 auto;
}
</code></pre>







