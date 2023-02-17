// Libraries
import React, { useState } from 'react';

// Components
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Header() {

  // State
  const [userToken, setUserToken] = useState('');

  /**
   * 
   */
  async function handleLogout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  /**
   * 
   */
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
