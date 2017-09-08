import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Member from '../lib/member.js';
import Finance from '../lib/finance.js';
import '../index.css';

class FinanceList extends Component {
  constructor(props) {
    super(props);
    this.getItemInstance = this.getItemInstance.bind(this);
  }

  getItemInstance(item) {
    function getNumber() {
      return item.number + ' ' + Finance.getCurrency(item.currency);
    }

    function getMembers() {
      var members = [];
      for (var i = 0; i < item.involve.length; i++) {
        members.push(Member.getMember(item.involve[i]));
      }
      console.log(JSON.stringify(members));
      return members.join();
    }

    if (!item.title || !item.number || item.involve.length === 0) { return; }
    return (
        <ListGroupItem header={item.title}>
          <p><span>{getNumber()}</span><span>折合为人民币： {Finance.getRMB(item)}元</span></p>
          <p>参与者有： {getMembers()}</p>
        </ListGroupItem>
    );    
  }

  render() {
    const {list} = this.props;
    return (
      <ListGroup className="finance-list">
        {
          list.map(function(item, i){
            return this.getItemInstance(item);
          }.bind(this))
        }
      </ListGroup>
    );
  }
}

export default FinanceList;
