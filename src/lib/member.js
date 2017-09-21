class Member {
  static member = require('../common/member.json');

  static getMember(index) {
    if (index === undefined || index < 0 || index > Member.member.length) {
      return Member.member;
    }
    return Member.member[index];
  }
  
  static getUser() {
    return parseInt(localStorage.getItem('user'), 10);
  }

  static login(user, key) {
    if (key !== 'joeytwins') {
      throw 'password wrong'
    }

    localStorage.setItem('user', user);
  }

  static getMyCost(item, totalCost) {
    var user = Member.getUser();
    console.log(JSON.stringify(item));
    if (item.involve.indexOf(user) < 0) { return 0; }

    return totalCost / item.involve.length;
  }

  static getMyBalance(item, totalCost) {
    var user = Member.getUser();
    if (user !== item.spend && item.involve.indexOf(user) < 0) { return 0;}

    var myDebt = 0;
    if (item.involve.indexOf(user) >= 0) {
      myDebt = totalCost / item.involve.length;
    }

    var mySpend = user === item.spend ? totalCost : 0;
    return mySpend - myDebt;
  }
}

export default Member;