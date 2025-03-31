import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("accordion connected")
  }

  toggle(event) {
    const header = event.currentTarget
    const item = header.closest(".--item")
    const content = item.querySelector(".--content")
    const icon = header.querySelector(".heroicons-chevron-down")
    
    const isExpanded = header.getAttribute("aria-expanded") === "true"
    
    // Toggle the current item
    header.setAttribute("aria-expanded", !isExpanded)
    content.hidden = isExpanded
    
    // Rotate icon
    if (isExpanded) {
      icon.style.transform = "rotate(0deg)"
    } else {
      icon.style.transform = "rotate(180deg)"
    }
  }
} 