import { Component } from 'react';
import Member from '../lib/member.js';

class BaseComponent extends Component {
  constructor(props) {
    super(props);

    if (!Member.getUser()) {
      window.location = '/login'
    }
  }
}

export default BaseComponent;