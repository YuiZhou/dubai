class Member {
  static member = ['JESS', 'AnB', '小弟'];

  static getMember(index) {
    if (index === undefined || index < 0 || index > Member.member.length) {
      return Member.member;
    }
    return Member.member[index];
  }
}

export default Member;