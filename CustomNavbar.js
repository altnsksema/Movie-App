import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import Search from './Search';

const CustomNavbar = ({onSearch}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">MOVIEX</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/login" onClick={toggle}>Login</NavLink>
          </NavItem>
          <NavItem>
            <Button color="primary" className="d-md-none" onClick={toggle}> &#9776; </Button>
            <div className="d-none d-md-block">
              <NavLink href="/categories">Categories</NavLink>
            </div>
          </NavItem>
          <NavItem>
          <Search onSearch={onSearch} />
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
