import React from 'react';
import BaseComponent from './BaseComponent.js';
import Item from './Item';
import Client from '../client/client.js';

class Add extends BaseComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(item) {
    if (!item.title || !item.number || item.involve.length === 0) { return; }
    Client.newItem(item, function(res, err) {
      window.location = '/';
    });
}

  render() {
   return (
     <Item 
     header='新记一笔账'
     onSubmit={this.submit}/>
   );
  }
}

export default Add;
