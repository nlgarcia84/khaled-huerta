import React, { useState } from 'react';
import styled from 'styled-components';
import FloatMenu from './FloatMenu';
import Hamburger from 'hamburger-react';

const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.headerTextColor};
  background-color: ${(props) => props.theme.colors.mainColor};
  font-family: ${(props) => props.theme.fonts};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Logo = styled.div`
  padding: 0 1em;
`;

const Menu = styled.div`
  padding: 0 0.5em;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleFloat = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <HeaderBox>
        <Logo>
          <p>Khaled Huerta</p>
        </Logo>
        <Menu>
          <Hamburger toggled={isOpen} toggle={toggleFloat} />
        </Menu>
      </HeaderBox>
      {isOpen && <FloatMenu />}
    </>
  );
};

export default Header;
