/**
 * Created by krzys on 02/03/2021.
 */

public with sharing class ContactController {

    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT FirstName, LastName, Email
                FROM Contact
                WITH SECURITY_ENFORCED
                ORDER BY Name];
    }
}