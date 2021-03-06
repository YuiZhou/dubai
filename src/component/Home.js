import React from 'react';
import BaseComponent from './BaseComponent.js';
import FinanceList from './FinanceList';
import {Button} from 'react-bootstrap';
import Client from '../client/client.js';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.getData = this.getData.bind(this);
    this.getData();
  }

  getData() {
    Client.getIndex(function(res, err) {
      if (err) { return; }

      this.setState(function() {
        return { list: res}
      });
    }.bind(this));
  }

  render() {
    const {list} = this.state;
    return (
      <div className="App container">
        <Button block bsStyle="primary" href="./add">记一笔</Button>
        <br/>
        <FinanceList list={list}/>
      </div>
    );
  }
}

export default Home;
