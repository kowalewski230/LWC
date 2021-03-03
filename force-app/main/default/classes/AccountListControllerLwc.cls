/**
 * Created by krzys on 03/03/2021.
 */

public with sharing class AccountListControllerLwc {
  @AuraEnabled(cacheable=true)
  public static List<Account> queryAccountsByRevenue(Decimal annualRevenue) {
    System.debug(annualRevenue);
    return [SELECT Name FROM Account WHERE AnnualRevenue >= :annualRevenue];
  }
}
