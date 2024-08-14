import React from 'react';
import khaledMainImage from '../assets/images/khaledImgKhutba.png';
import khaledMasjidImage from '../assets/images/khaledImgMasjid.jpg';
import khaledBookImage from '../assets/images/khaledImgBook.jpg';
import HadithCard from './HadithCard';
import hadiths from '../assets/hadiths';
import styled from 'styled-components';

const MainBox = styled.div`
  position: relative;
  top: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.mainColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const ImgMain = styled.img`
  width: 100%;
  filter: sepia(40%);
  opacity: 60%;
`;

const Main = () => {
  return (
    <>
      <MainBox>
        <ImgMain src={khaledMainImage} />
        <HadithCard>{hadiths[0].value}</HadithCard>
        <ImgMain src={khaledMasjidImage} />
        <HadithCard>{hadiths[1].value}</HadithCard>
        <ImgMain src={khaledBookImage} />
      </MainBox>
    </>
  );
};

export default Main;
