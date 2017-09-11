class Finance {
  static currency = require('../common/finance.json');

  static getRMB(item) {
    if (item.currency < 0 || item.currency >= Finance.currency.length) {return;}
    return item.number * Finance.currency[item.currency].exchange;
  }

  static getCurrency(index) {
   return Finance.currency[index].name;
  }

  static getAllCurrencyName() {
    var result = [];
    for (var i = 0; i < Finance.currency.length; i++) {
      result.push(Finance.currency[i].name);
    }
    return result;
  }
}

export default Finance;