import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Arts from './Arts';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Headers(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand tag={Link} to="/" className="me-auto">
            Museu de Arte
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/arts">Galeria de Arte</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/NalielleSantos">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/arts" element={<Arts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Headers;
