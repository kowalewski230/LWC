// ...
const SUCCESS_TITLE = "Success";
const MESSAGE_SHIP_IT = "Ship it!";
const SUCCESS_VARIANT = "success";
const ERROR_TITLE = "Error";
const ERROR_VARIANT = "error";
import { LightningElement, wire, api, track } from "lwc";
import { publish, MessageContext } from "lightning/messageService";
import BoatMC from "@salesforce/messageChannel/BoatMessageChannel__c";
import getBoats from "@salesforce/apex/BoatDataService.getBoats";
export default class BoatSearchResults extends LightningElement {
  selectedBoatId;
  columns = [];
  boatTypeId = "";
  boats;
  isLoading = false;

  // wired message context
  @wire(MessageContext) messageContext;
  // wired getBoats method
  @wire(getBoats, { boatTypeId: "$boatTypeId" })
  wiredBoats(result) {
    this.boats = result;
    this.isLoading = false;
    this.notifyLoading(this.isLoading);
  }

  // public function that updates the existing boatTypeId property
  // uses notifyLoading
  @api searchBoats(boatTypeId) {
    this.isLoading = true;
    this.notifyLoading(this.isLoading);
    this.boatTypeId = boatTypeId;
  }

  // this public function must refresh the boats asynchronously
  // uses notifyLoading
  refresh() {}

  // this function must update selectedBoatId and call sendMessageService
  updateSelectedTile(event) {
    this.selectedBoatId = event.detail.boatId;
    this.sendMessageService(this.selectedBoatId);
  }

  // Publishes the selected boat Id on the BoatMC.
  sendMessageService(boatId) {
    publish(this.messageContext, BoatMC, { recordId: boatId });
  }

  // The handleSave method must save the changes in the Boat Editor
  // passing the updated fields from draftValues to the
  // Apex method updateBoatList(Object data).
  // Show a toast message with the title
  // clear lightning-datatable draft values
  handleSave(event) {
    // notify loading
    const updatedFields = event.detail.draftValues;
    // Update the records via Apex
    updateBoatList({ data: updatedFields })
      .then(() => {})
      .catch((error) => {})
      .finally(() => {});
  }
  // Check the current value of isLoading before dispatching the doneloading or loading custom event
  notifyLoading(isLoading) {}
}
