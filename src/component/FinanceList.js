import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Member from '../lib/member.js';
import Finance from '../lib/finance.js';
import '../index.css';

class FinanceList extends Component {
  constructor(props) {
    super(props);
    this.getItemInstance = this.getItemInstance.bind(this);
    this.getMyCost = this.getMyCost.bind(this);
  }

  getItemInstance(item, i) {
    function getNumber() {
      return item.number + ' ' + Finance.getCurrency(item.currency);
    }

    function getMembers() {
      var members = [];
      for (var i = 0; i < item.involve.length; i++) {
        members.push(Member.getMember(item.involve[i]));
      }
      return members.join();
    }

    if (!item.title || !item.number || item.involve.length === 0) { return; }
    return (
        <ListGroupItem key={i} href={'./edit?item=' + JSON.stringify(item)}>
          <p>{this.getMyCost(item)}<span className="bold">{item.title}</span></p>
          <p><span>{getNumber()} ({Finance.getRMB(item)}CNY)</span><span className="pull-right">参与者： {getMembers()}</span></p>
          <p>{item.date}</p>
        </ListGroupItem>
    );    
  }

  getMyCost(item) {
    var cost = Member.getMyCost(item, Finance.getRMB(item));
    console.log(cost);
    if (cost === 0) {
      return;
    } else {
      return (<span className={(cost > 0 ? 'text-success' : 'text-danger') + ' pull-right'}>{cost} CNY</span>);
    }
  }


  render() {
    const {list} = this.props;
    return (
      <ListGroup className="finance-list">
        {
          list.map(function(item, i){
            return this.getItemInstance(item, i);
          }.bind(this))
        }
      </ListGroup>
    );
  }
}

export default FinanceList;
