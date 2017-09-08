import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../index.css';

class Add extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props))
    this.getDate = this.getDate.bind(this);
    this.getValue = this.getValue.bind(this);
    this.submit = this.submit.bind(this);
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

  submit() {
    var item = this.getValue();
    if (!item.title || !item.number || item.involve.length === 0) { return; }
    console.log(JSON.stringify(item));
  }

  getDate() {
    var today = new Date();
    var dd = ("0" + (today.getDate())).slice(-2);
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }
  render() {
    return (
      <div className="add container">
        <h3>add an accounting???</h3>
        <p>title???</p>
        <FormControl type="text" placeholder="title???" ref="title"/>

        <p>number????</p>
        <FormControl type="number" placeholder="number???" ref="number"/>

        <p>currency????</p>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" ref="currency" name="currency" defaultValue={1}>
            <ToggleButton value={1}>RMB</ToggleButton>
            <ToggleButton value={2}>AED</ToggleButton>
            <ToggleButton value={3}>USD</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>

        <p>date????</p>
        <FormControl type="date" placeholder="date???" defaultValue={this.getDate()} ref="date"/>

        <p>involve???</p>
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 2, 3]} ref="involve">
            <ToggleButton value={1}>JESS</ToggleButton>
            <ToggleButton value={2}>B</ToggleButton>
            <ToggleButton value={3}>me</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>

        <p>comment????</p>
        <FormControl type="textarea" placeholder="comment???" ref="comment"/>

        <Button block onClick={this.submit} className="add-button">add</Button>
      </div>
    );
  }
}

export default Add;
