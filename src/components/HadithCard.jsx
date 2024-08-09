import React from 'react';
import styled from 'styled-components';

const Hadith = styled.div`
  padding: 1em;
`;

const HadithCard = ({ children }) => {
  return <Hadith>{children}</Hadith>;
};

export default HadithCard;
