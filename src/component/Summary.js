import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Client from '../client/client.js';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: []
    };

    this.getSummary = this.getSummary.bind(this);
    this.getListStyle = this.getListStyle.bind(this);
    this.getSummary();
  }

  getSummary() {
    Client.getSummary(function(res, err) {
      if (err) { return { summary: [] }; }

      this.setState(function() {
        return { summary: res || [] }
      });
    }.bind(this));
  }

  getListStyle(number) {
    if (number === 0) {
      return '';
    } else if (number > 0) {
      return 'success';
    } else {
      return 'danger';
    }
  }

  render() {
    const { summary } = this.state;
    return (

      <div className="summary container">
        <h3>账单清算</h3>
        <p>按照汇率blablabla</p>
        <br/>
        <br/>
        <ListGroup>
          {
            summary.map(function (item, i) {
              return (<ListGroupItem bsStyle={this.getListStyle(item.finance)}><strong>{item.name}</strong>&nbsp;&nbsp;&nbsp;{item.finance > 0 ? '应收' : '应支出'}{Math.abs(item.finance)}元人民币</ListGroupItem>);
            }.bind(this))
          }
        </ListGroup>
      </div>
    );
  }
}

export default Summary;
