/**
 * Created by krzys on 03/03/2021.
 */

public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList() {
    return null;
  }
}
