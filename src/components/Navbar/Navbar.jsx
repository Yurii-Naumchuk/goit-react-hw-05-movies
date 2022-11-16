import React from 'react';
import NavbarMenu from 'components/Navbar/NavbarMenu';
import { HeaderWrapper, Nav } from './NavBar.styled';

export default function Navbar() {
  return (
    <HeaderWrapper>
      <Nav>
        <NavbarMenu />
      </Nav>
    </HeaderWrapper>
  );
}
