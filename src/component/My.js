import React from 'react';
import BaseComponent from './BaseComponent.js';
import FinanceList from './FinanceList';
import Client from '../client/client.js';

class My extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.getData = this.getData.bind(this);
    this.getData();
  }

  getData() {
    Client.getMyIndex(function (res, err) {
      if (err) { return; }

      this.setState(function () {
        console.log(res)
        return { list: res }
      });
    }.bind(this));
  }

  render() {
    const { list } = this.state;
    return (
      <div className="container">
        <FinanceList list={list} />
      </div>
    );
  }
}

export default My;
