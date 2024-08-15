import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FaqBox = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  color: white;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = () => {
  return (
    <>
      <Link
        style={{
          textDecoration: 'none',
          position: 'relative',
          zIndex: '1',
          top: '15em',
        }}
        to="/learnIslam"
      >
        <FaqBox>FAQ sobre Islam</FaqBox>
      </Link>
    </>
  );
};
