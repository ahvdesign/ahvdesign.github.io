import { LitElement, html } from "lit";
import styles from "./a-button.scss";

export class AButton extends LitElement {
  static get styles() {
    return styles;
  }

  static properties = {
    label: { type: String },
  };

  constructor() {
    super();
    this.label = "Button";
  }

  render() {
    return html` <button>${this.label}</button> `;
  }
}

customElements.define("a-button", AButton);
