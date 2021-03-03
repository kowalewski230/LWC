// imports
import { LightningElement } from "lwc";
import {
  APPLICATION_SCOPE,
  publish,
  MessageContext
} from "lightning/messageService";
import BOATMC from "@salesforce/messageChannel/BoatMessageChannel__c";
import { NavigationMixin } from "lightning/navigation";
export default class BoatSearch extends NavigationMixin(LightningElement) {
  isLoading = false;

  // Handles loading event
  handleLoading() {}

  // Handles done loading event
  handleDoneLoading() {}

  // Handles search boat event
  // This custom event comes from the form
  searchBoats(event) {}

  createNewBoat() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Boat__c",
        actionName: "new"
      }
    });
  }
}
