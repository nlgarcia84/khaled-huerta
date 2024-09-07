import { Button } from './Button';
import HadithCard from './HadithCard';
import hadiths from '../assets/hadiths';
import khaledBookImage from '../assets/images/khaledImgBook.webp';
import khaledMainImage from '../assets/images/khaledImgKhutba.webp';
import khaledMasjidImage from '../assets/images/khaledImgMasjid.webp';
import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
  position: relative;
  top: 1em;
  text-align: center;
  color: ${(props) => props.theme.colors.mainColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const ImgMain = styled.img`
  width: 100%;
  filter: sepia(10%);
  opacity: 60%;
`;

const WrapImg = styled.div`
  width: 100%;
`;

const Main = () => {
  return (
    <>
      <MainBox>
        <WrapImg>
          <ImgMain src={khaledMainImage} />
        </WrapImg>
        <Button />
        <HadithCard>{hadiths[0].value}</HadithCard>
        <WrapImg>
          <ImgMain src={khaledMasjidImage} />
        </WrapImg>
        <HadithCard>{hadiths[1].value}</HadithCard>
        <WrapImg>
          <ImgMain src={khaledBookImage} />
        </WrapImg>
      </MainBox>
    </>
  );
};

export default Main;
