import React, { Component } from 'react';
import Item from './Item';
import Client from '../client/client.js';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(item) {
    if (!item || !item.title || !item.number || item.involve.length === 0) { return; }
    Client.editItem(item, function(res, err) {
      window.location = '/';
    });
  }

  render() {
    const item = JSON.parse(this.props.match.params.item);
    return (
      <Item
        button="确定更改这一笔记账"
        id={item.id}
        title={item.title}
        number={item.number}
        currency={item.currency}
        date={item.date}
        involve={item.involve}
        spend={item.spend}
        onSubmit={this.submit} />
    );
  }

}

export default Edit;
