import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../styles/device';

const FaqBox = styled.div`
  color: white;
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  @media ${device.mobileS} {
    font-size: 0.7em;
  }
  @media ${device.mobileM} {
    font-size: 1em;
  }
  @media ${device.mobileM} {
    font-size: 1em;
  }
  @media ${device.laptopL} {
    font-size: 1.5em;
  }
`;

export const Button = ({ toggle }) => {
  return (
    <>
      <Link
        onClick={() => toggle()}
        style={{
          textDecoration: 'none',
        }}
        to="/faqs"
      >
        <FaqBox>¿Por qué Islam?</FaqBox>
      </Link>
    </>
  );
};
