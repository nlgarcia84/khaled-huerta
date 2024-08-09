import React, { useState } from 'react';
import styled from 'styled-components';
import FloatMenu from './FloatMenu';
import Hamburger from 'hamburger-react';

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  color: ${(props) => props.theme.colors.headerTextColor};
  background-color: ${(props) => props.theme.colors.mainColor};
  font-family: ${(props) => props.theme.fonts};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleFloat = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <HeaderBox>
        <p>Khaled Huerta</p>
        <Hamburger toggled={isOpen} toggle={toggleFloat} />
      </HeaderBox>
      {isOpen && <FloatMenu />}
    </>
  );
};

export default Header;
