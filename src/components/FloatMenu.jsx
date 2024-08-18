import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = styled.div`
  position: fixed;
  top: 3em;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.burgerTextColor};
  opacity: 0.9;
`;

const List = styled.ul`
  list-style: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const FloatMenu = ({ toggle }) => {
  return (
    <Menu>
      <List>
        <li>
          <Link
            onClick={() => toggle()}
            style={{ color: 'white', textDecoration: 'none' }}
            to="/about"
          >
            Mi historia
          </Link>
        </li>
        <li>
          {' '}
          <Link
            onClick={() => toggle()}
            style={{ color: 'white', textDecoration: 'none' }}
            to="/myStudies"
          >
            Estudios
          </Link>
        </li>
        <li>Mi Blog</li>
        <li>
          {' '}
          <Link
            onClick={() => toggle()}
            style={{ color: 'white', textDecoration: 'none' }}
            to="/contact"
          >
            Contacto
          </Link>
        </li>
      </List>
    </Menu>
  );
};

export default FloatMenu;
