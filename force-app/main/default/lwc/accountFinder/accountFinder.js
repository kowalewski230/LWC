/**
 * Created by krzys on 03/03/2021.
 */

import { LightningElement, wire } from "lwc";
import queryAccountsByRevenue from "@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue";
export default class AccountSearch extends LightningElement {
  annualRevenue = null;
  handleChange(event) {
    this.annualRevenue = event.detail.value;
  }
  reset() {
    this.annualRevenue = null;
  }
  @wire(queryAccountsByRevenue, { annualRevenue: "$annualRevenue" })
  accounts;
}
