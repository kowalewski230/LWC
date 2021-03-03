/**
 * Created by krzys on 03/03/2021.
 */

import { LightningElement } from "lwc";
export default class AccountSearch extends LightningElement {
  annualRevenue = null;
  handleChange(event) {
    this.annualRevenue = event.detail.value;
  }
  reset() {
    this.annualRevenue = null;
  }
}
