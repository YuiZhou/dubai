const azure = require('azure-storage');

function AzureTable() {
  this.tableName = 'travel';
  this.table = azure.createTableService(process.env['azure_table_connection_string']);
}

AzureTable.prototype.getAll = function (callback) {
  this.table.queryEntities(this.tableName, new azure.TableQuery(), null, function(err, result, response) {
    if (err) {
          callback(null, err);
          return;
    }

    var items = [];
    for (var i = 0; i < result.entries.length; i++) {
      items.push(JSON.parse(result.entries[i].message['_']));
    }

    callback(items);
  });
}

AzureTable.prototype.edit = function (item, callback) {
  var task = {
    PartitionKey: { '_': 'dubai' },
    RowKey: { '_': item.id },
    message: { '_': JSON.stringify(item) }
  }

  this.table.replaceEntity(this.tableName, task, function (err, result, response) {
    if (err) {
      callback(null, err);
      return;
    }

    callback(result);
  });
}

AzureTable.prototype.create = function (item, callback) {
  var task = {
    PartitionKey: { '_': 'dubai' },
    RowKey: { '_': item.id },
    message: { '_': JSON.stringify(item) }
  }

  this.table.insertEntity(this.tableName, task, function (err, result, response) {
    if (err) {
      callback(null, err);
      return;
    }

    callback(result);
  });
}

module.exports = AzureTable;