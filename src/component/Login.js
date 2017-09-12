import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Member from '../lib/member.js';
import '../index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '一起去旅行吧',
      bsStyle: 'primary'
    }
    this.submit = this.submit.bind(this);
  }

  submit() {
      var user = this.refs.user._values.value;
      var key = ReactDOM.findDOMNode(this.refs.password).value;
    try {
      Member.login(user, key);
      window.location = '/';
    }catch(err) {
      this.setState(function() {
        return {
          content: '登录失败',
          bsStyle: 'danger'
        }
      });
    }
  }

  render() {
    const members = Member.getMember();
    const {bsStyle, content} = this.state;
    return (
      <div className="add container">
        <p>用户</p>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" ref="user" name="user">
            {
              members.map(function(item, i) {
                return (<ToggleButton value={i} key={i}>{item}</ToggleButton>);
              })
            }
          </ToggleButtonGroup>
        </ButtonToolbar>
        <p>密码</p>
        <FormControl type="password" ref="password"/>
        <Button block bsStyle={bsStyle} onClick={this.submit} className="add-button">{content}</Button>
      </div>
    );
  }
}

export default Login;
