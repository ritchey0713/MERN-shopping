import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
 } from 'reactstrap';

class AppNavBar extends Component {
  state = {
      isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    <div>
      <NavBar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href='/'>MERN Shopping</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/ritchey0713/MERN-shopping/tree/master/client/src" />
                    GitHub
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
      </NavBar>
    </div>
  }
}






export default AppNavBar;