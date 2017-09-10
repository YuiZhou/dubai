import React, { Component } from 'react';
import Item from './Item';

class Add extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(item) {
    if (!item.title || !item.number || item.involve.length === 0) { return; }
  }

  render() {
   return (
     <Item 
     header='新记一笔账'
     onSumbit={this.submit}/>
   );
  }
}

export default Add;
