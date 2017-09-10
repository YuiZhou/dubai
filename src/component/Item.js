import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Member from '../lib/member.js';
import Finance from '../lib/finance.js';
import Util from '../lib/util.js'
import '../index.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return {
      number: ReactDOM.findDOMNode(this.refs.number).value,
      currency: ReactDOM.findDOMNode(this.refs.currency).value,
      date: ReactDOM.findDOMNode(this.refs.date).value,
      involve: ReactDOM.findDOMNode(this.refs.involve).value,
      spend: ReactDOM.findDOMNode(this.refs.spend).value,
    }
  }

  render() {
    const members = Member.getMember();
    const currencies = Finance.getAllCurrencyName();
    const { 
      header,
      button,
      title,
      number,
      currency,
      date,
      spend,
      involve,
      onSubmit
     } = this.props;
    return (
      <div className="add container">
        <p>说明</p>
        <FormControl type="text" placeholder="说明" ref="title" defaultValue={title}/>

        <p>数字</p>
        <FormControl type="number" placeholder="数字" ref="number" defaultValue={number}/>

        <p>货币单位</p>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" ref="currency" name="currency" defaultValue={currency}>
            {
              currencies.map(function(item, i) {
                return (<ToggleButton value={i}>{item}</ToggleButton>);
              })
            }
          </ToggleButtonGroup>
        </ButtonToolbar>

        <p>付款人</p>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" ref="spend" name="spend" defaultValue={spend}>
            {
              members.map(function(item, i) {
                return (<ToggleButton value={i}>{item}</ToggleButton>);
              })
            }
          </ToggleButtonGroup>
        </ButtonToolbar>

        <p>日期</p>
        <FormControl type="date" defaultValue={date} ref="date"/>

        <p>参与者</p>
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox" defaultValue={involve} ref="involve">
            {
              members.map(function(item, i) {
                return (<ToggleButton value={i}>{item}</ToggleButton>);
              })
            }
          </ToggleButtonGroup>
        </ButtonToolbar>

        <Button block bsStyle="primary" onClick={onSubmit} className="add-button">{button}</Button>
      </div>
    );
  }
}

Item.defaultProps  =  {
    button: '添加一笔记账',
    title: '',
    number: 0,
    currency: 0,
    date: Util.getDate(),
    spend: Member.getUser(),
    involve: [0, 1, 2]
};

export default Item;
