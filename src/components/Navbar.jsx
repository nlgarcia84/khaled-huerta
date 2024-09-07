import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../styles/device';

const NavMenu = styled.ul`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
    list-style: none;
    padding: 1em;
  }
`;

const NavItem = styled.li`
  padding: 0.5em;
`;

export const Navbar = () => {
  return (
    <>
      <NavMenu>
        <NavItem>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/about"
          >
            Mi historia
          </Link>
        </NavItem>
        <NavItem>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/myStudies"
          >
            Estudios
          </Link>
        </NavItem>
        <NavItem>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/contact"
          >
            Contacto
          </Link>
        </NavItem>
      </NavMenu>
    </>
  );
};
