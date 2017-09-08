import React, { Component } from 'react';
import FinanceList from './FinanceList';

class Home extends Component {

  render() {
    const list = [
      {
        title: 'hahah',
        number: 1.00,
        involve: [1,2,0],
        currency: 1
      },
      {
        title: '1234',
        number: 10.00,
        involve: [1,0],
        currency: 2        
      },
      {
        title: '3213',
        number: 6.00,
        involve: [1],
        currency: 0        
      },
      {
        title: 'hahah',
        number: 1.00,
        involve: [],
        currency: 1        
      },
    ];
    return (
      <div className="App">
        <FinanceList list={list}/>
      </div>
    );
  }
}

export default Home;
