import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
 
  connect() {
    this.animate()
  }

  animate() {
    const toast = this.element.querySelector(".--toast")
    if (toast) {
      toast.classList.add("--animate-in")
      setTimeout(() => {
          toast.classList.add("--animate-out")
          toast.classList.remove("--animate-in")
      }, 3000)
    }

  }
} 