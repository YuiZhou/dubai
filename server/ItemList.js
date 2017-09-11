const AzureTable = require('./azureTable.js');

function ItemList() {
  this.list = undefined;
  this.summary = undefined;
  this.table = new AzureTable();
  getList = getList.bind(this);
  cleanup = cleanup.bind(this);
}

ItemList.prototype.get = function (user, callback) {
  function filter(user) {
    if (!user) {
      return this.list;
    }

    var result = [];
    for (var i = 0; i < this.list.length; i++) {
      var item = this.list[i];
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
    callback(filter(user));
  });
}

var getList = function (callback) {
  if (this.list === undefined) {
    this.table.getAll(function (result, err) {
      if (err) {
        callback(err);
        return;
      }

      this.list = result;

      console.log(JSON.stringify(result));

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
  this.table.create(item, callback);
}

ItemList.prototype.edit = function (item, callback) {
  cleanup();
  this.table.edit(item, callback);
}

ItemList.prototype.summary = function (callback) {
  getList(function (err) {
    if (err) {
      callback(null, err);
    }

    // todo
  });
}

module.exports = ItemList;