import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(item) {
    if (!item.title || !item.number || item.involve.length === 0) { return; }
    // todo
  }

  render() {
    const item = JSON.parse(this.props.match.params.item);
    return (
      <Item
        button="确定更改这一笔记账"
        title={item.title}
        number={item.number}
        currency={item.currency}
        date={item.date}
        involve={item.involve}
        spend={item.spend}
        onSumbit={this.submit} />
    );
  }

}

export default Edit;
