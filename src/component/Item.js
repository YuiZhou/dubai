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
      title: ReactDOM.findDOMNode(this.refs.title).value,
      number: ReactDOM.findDOMNode(this.refs.number).value,
      currency: ReactDOM.findDOMNode(this.refs.currency).value,
      date: ReactDOM.findDOMNode(this.refs.date).value,
      involve: ReactDOM.findDOMNode(this.refs.involve).value,
      comment: ReactDOM.findDOMNode(this.refs.comment).value
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
      involve,
      comment,
      onSubmit
     } = this.props;
    console.log(members);
    return (
      <div className="add container">
        <h3>{header}</h3>
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

        <p>备注</p>
        <FormControl type="textarea" placeholder="备注" ref="comment" defaultValue={comment}/>

        <Button block bsStyle="primary" onClick={onSubmit} className="add-button">{button}</Button>
      </div>
    );
  }
}

Item.defaultProps  =  {
    header: '新记账',
    button: '添加',
    title: '',
    number: 0,
    currency: 0,
    date: Util.getDate(),
    involve: [0, 1, 2],
    comment: ''
};

export default Item;
