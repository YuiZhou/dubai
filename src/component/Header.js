import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

NavItem.prototype.handleClick = function handleClick(e) {
};

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">JoJo Dubai</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">home</NavItem>
            <NavItem eventKey={2} href="/add">add</NavItem>
            <NavItem eventKey={3} href="/my">my</NavItem>
            <NavItem eventKey={4} href="/summary">summary</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
