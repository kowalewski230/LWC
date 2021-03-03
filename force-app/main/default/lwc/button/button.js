/**
 * Created by krzys on 03/03/2021.
 */

import { LightningElement, api } from "lwc";

export default class Button extends LightningElement {
  @api label;
  @api icon;
  handleButton(event) {
    this.dispatchEvent(
      new CustomEvent("buttonclick", {
        bubbles: true
      })
    );
  }
}
