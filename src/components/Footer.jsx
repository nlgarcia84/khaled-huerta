import styled from 'styled-components';

const FooterBox = styled.div`
  position: relative;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.textColor};
  color: white;
  text-align: center;
  margin-top: auto;
`;

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <p>2024 - Desarrollado por Desertdrop ©</p>
      </FooterBox>
    </>
  );
};
