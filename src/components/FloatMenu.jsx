import React from 'react';
import burgerItems from '../assets/burgerItems';
import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  top: 3em;
  z-index: 1;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.burgerTextColor};
  opacity: 0.8;
`;

const List = styled.ul`
  list-style: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const FloatMenu = () => {
  return (
    <Menu>
      <List>
        {burgerItems.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </List>
    </Menu>
  );
};

export default FloatMenu;
