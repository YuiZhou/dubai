class Member {
  static member = ['JESS', 'AnB', '小弟'];

  static getMember(index) {
    if (index < 0 || index > this.member.length) {return this.member;}
    return this.member[index];
  }
}

export default Member;