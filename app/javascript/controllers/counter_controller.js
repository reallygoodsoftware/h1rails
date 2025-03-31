import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {
    this.count = 0
    console.log("Counter connected")
  }

  increment() {
    this.count++
    this.outputTarget.textContent = this.count
  }
} 