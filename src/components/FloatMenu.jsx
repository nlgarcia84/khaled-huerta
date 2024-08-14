import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">
            Mi historia
          </Link>
        </li>

        <li>Estudios</li>
        <li>Mi Blog</li>
        <li>Contacto</li>
      </List>
    </Menu>
  );
};

export default FloatMenu;
