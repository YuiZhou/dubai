class Util {
  static getDate() {
    var today = new Date();
    var dd = ("0" + (today.getDate())).slice(-2);
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }
}

export default Util;