import React from 'react';
import BaseComponent from './BaseComponent.js';
import Item from './Item';
import Client from '../client/client.js';
import querystring from 'querystring';

class Edit extends BaseComponent {
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
    const queries = querystring.parse(this.props.location.search.substr(1));
    const item = JSON.parse(queries['item']) || {};
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
