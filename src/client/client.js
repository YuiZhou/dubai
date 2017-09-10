import axios from 'axios';
import Member from '../lib/member.js';

class Client {
  static getIndex(callback) {
    Client.get('/api/home', callback);
  }

  static getMyIndex(callback) {
    Client.get('/api/user/' + Member.getUser(), callback);
  }

  static getSummary(callback) {
    Client.get('/api/summary', callback);
  }

  static newItem(item, callback) {
    Client.post('/api/new', item, callback);
  }

  static editItem(item, callback) {
    if (!item.id) {
      Client.newItem(item, callback);
    } else {
      Client.post('/api/edit', item, callback);
    }
  }

  static get(url, callback) {
    axios.get(url)
    .then(function(res) {
      callback(res.data);
    })
    .catch(function (err) {
      callback(null, err);
    });
  }

  static post(url, body, callback) {
    axios.post(url, body)
    .then(function(res) {
      callback(res.data);
    })
    .catch(function (err) {
      callback(null, err);
    });
  }
}

export default Client;