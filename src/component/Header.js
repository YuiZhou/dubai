import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';

NavItem.prototype.handleClick = function handleClick(e) {
};

class Header extends Component {
  render() {
    return (
      <AutoAffix viewportOffsetTop={0}>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">JoJo Dubai</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">首页</NavItem>
            <NavItem eventKey={2} href="/add">添加新记账</NavItem>
            <NavItem eventKey={3} href="/my">我的开销</NavItem>
            <NavItem eventKey={4} href="/summary">清账</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </AutoAffix>
    );
  }
}

export default Header;
