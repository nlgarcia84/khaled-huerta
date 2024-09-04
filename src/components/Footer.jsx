import styled from 'styled-components';

const FooterBox = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.textColor};
  color: white;
  text-align: center;
  margin-top: auto;
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
