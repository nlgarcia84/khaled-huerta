import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FaqBox = styled.div`
  color: white;
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = () => {
  return (
    <>
      <Link
        style={{
          position: 'relative',
          zIndex: '1',
          textDecoration: 'none',
          top: '15em',
        }}
        to="/learnIslam"
      >
        <FaqBox>¿Por qué Islam?</FaqBox>
      </Link>
    </>
  );
};
