import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  
  connect() {
  }

  open() {
    this.element.classList.add("--visible")
  }

  close() {
    this.element.classList.remove("--visible")
  }

  // Close if clicking outside of modal
  clickOutside(event) {
    if (event.target === this.element || event.target.classList.contains("--overlay") || event.target.classList.contains("--wrapper-inner")) {
      this.close()
    }
  }

  // Close if escape key is pressed
  disconnect() {
    this.close()
  }
} 