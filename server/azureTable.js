function AzureTable() {
  this.list = [];
}

AzureTable.prototype.getAll = function (callback) {
  // this.tableService.queryEntities(this.tableName, new azure.TableQuery(), null, function(err, result, response) {

  // });
  callback(this.list);
}

AzureTable.prototype.edit = function (item, callback) {
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].id === item.id) {
      this.list.splice(i, 1, item);
      callback();
      return;
    }
  }
}

AzureTable.prototype.create = function (item, callback) {
  this.list.push(item);
  callback();
}

module.exports = AzureTable;