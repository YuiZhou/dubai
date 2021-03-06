const AzureTable = require('./azureTable.js');
const uuidv1 = require('uuid/v1');

const members = require('../src/common/member.json');
const finance = require('../src/common/finance.json');

function ItemList() {
  this.list = undefined;
  this.summary = undefined;
  this.table = new AzureTable();
  getList = getList.bind(this);
  cleanup = cleanup.bind(this);
}

ItemList.prototype.get = function (user, callback) {
  function filter(user, list) {
    if (!user) {
      return list;
    }

    var result = [];
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      if (item.spend === user || item.involve.indexOf(user) >= 0) {
        result.push(item);
      }
    }
    return result;
  }

  getList(function (err) {
    if (err) {
      callback(null, err);
      return;
    }
    var filtered = filter(user, this.list);
    callback(filtered);
  }.bind(this));
}

var getList = function (callback) {
  if (this.list === undefined) {
    this.table.getAll(function (result, err) {
      if (err) {
        callback(err);
        return;
      }

      this.list = result;

      callback();
    }.bind(this));
  } else {
    callback();
  }
}

var cleanup = function () {
  this.list = undefined;
  this.summary = undefined;
}

ItemList.prototype.add = function (item, callback) {
  cleanup();
  item.id = uuidv1();
  this.table.create(item, callback);
}

ItemList.prototype.edit = function (item, callback) {
  cleanup();
  this.table.edit(item, callback);
}

ItemList.prototype.computeSummary = function (callback) {
  getList(function (err) {
    if (err) {
      callback(null, err);
    }

    var result = [];
    for (var i = 0; i < members.length; i++) {
      result.push({
        name: members[i],
        finance: 0
      });
    }

    const list = this.list;
    for (var j = 0; j < list.length; j++) {
      var item = list[j];
      var totalCost = item.number * finance[item.currency].exchange;
      result[item.spend].finance += totalCost;
      var average = totalCost / item.involve.length;
      for (var k = 0; k < members.length; k++) {
        if (item.involve.indexOf(k) < 0) {continue;}
        result[k].finance -= average;
      }
    }

    callback(result);

  }.bind(this));
}

module.exports = ItemList;