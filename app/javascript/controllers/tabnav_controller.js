import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
  }

  activateTab(event) {
    this._resetTabs()
    event.currentTarget.classList.add("--active")
    event.currentTarget.setAttribute("aria-selected", "true")
  }

  _resetTabs() {
    this.allTabs.forEach(tab => {
      tab.classList.remove("--active")
      tab.setAttribute("aria-selected", "false")
    })
  }

  get allTabs() {
    return this.element.querySelectorAll(".ui-tabnav .--tab")
  }
} 