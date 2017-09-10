import React, { Component } from 'react';
import FinanceList from './FinanceList';

class My extends Component {
  render() {
    const list = [];
    return (
       <FinanceList list={list}/>
    );
  }
}

export default My;
