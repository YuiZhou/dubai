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
    this.processList = this.processList.bind(this);
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
          <p><span>{item.date}</span></p>
        </ListGroupItem>
    );    
  }

  getMyCost(item) {
    var cost = item.myCost;
    var costInstance = cost ? (<span className='text-success'>{cost} CNY</span>) : '';
    var balance = item.myBalance;
    var balanceInstance = balance ? (<span className={(balance > 0 ?  'text-success' : 'text-danger')}>({balance} CNY)</span>) : '';
    return (<span className='pull-right'>{costInstance}{balanceInstance}</span>);
  }

  processList(list) {
    var totalCost = 0;
    var result = [];

    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var itemCost = Finance.getRMB(item);
      var myCost = Member.getMyCost(item, itemCost);
      var myBalance = Member.getMyBalance(item, itemCost);
      totalCost += myCost;
      result.push(Object.assign(item, {
        myCost: myCost,
        myBalance: myBalance
      }));
    }

    return {
      totalCost: totalCost,
      list: list
    }
  }


  render() {
    const { list } = this.props;
    const costSummary = this.processList(list);
    return (
      <div>
        <div className='alert alert-info'>你总共花费了{costSummary.totalCost}CNY</div>
        <ListGroup className='finance-list'>
          {
            costSummary.list.map(function(item, i){
              return this.getItemInstance(item, i);
            }.bind(this))
          }
        </ListGroup>
      </div>
    );
  }
}

export default FinanceList;
