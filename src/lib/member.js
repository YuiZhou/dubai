class Member {
  static member = require('../common/member.json');

  static getMember(index) {
    if (index === undefined || index < 0 || index > Member.member.length) {
      return Member.member;
    }
    return Member.member[index];
  }
  
  static getUser() {
    return 2;
  }

  static getMyCost(item, totalCost) {
    var user = Member.getUser();
    if (user !== item.spend && item.involve.indexOf(user) < 0) { return 0;}

    var myDebt = 0;
    if (item.involve.indexOf(user) > 0) {
      myDebt = totalCost / item.involve.length;
    }

    var mySpend = user === item.spend ? totalCost : 0;
    return mySpend - myDebt;
  }
}

export default Member;