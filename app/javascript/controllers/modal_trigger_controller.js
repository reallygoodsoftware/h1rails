import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    this.element.addEventListener("click", this.open.bind(this))
  }

  open() {
    const modalContainer = document.getElementById('modal-container')
    const modalContentFrame = document.querySelector('turbo-frame#modal-content-container')
    const modalContentUrl = this.element.dataset.contentUrl
    modalContainer.classList.add("--visible")
    modalContentFrame.src = modalContentUrl
  }

  disconnect() {
    this.element.removeEventListener("click", this.open)
  }
}
