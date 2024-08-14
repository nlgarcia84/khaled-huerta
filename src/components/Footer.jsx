import styled from 'styled-components';

const FooterBox = styled.div`
  position: absolute;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
`;

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <p>2024 - Diseñado por Desertdrop ©</p>
      </FooterBox>
    </>
  );
};
