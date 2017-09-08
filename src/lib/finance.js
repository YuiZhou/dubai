class Finance {
  static currency = [
    {
      name: 'CNY',
      exchange: 1
    },
    {
      name: 'AED',
      exchange: 1.8
    },
    {
      name: 'USD',
      exchange: 6.45
    },
  ];

  static getRMB(item) {
    if (item.currency < 0 || item.currency >= Finance.currency.length) {return;}
    return item.number * Finance.currency[item.currency].exchange;
  }

  static getCurrency(index) {
   return Finance.currency[index].name;
  }
}

export default Finance;