import { Button } from './Button';
import HadithCard from './HadithCard';
import hadiths from '../assets/hadiths';
import khaledBookImage from '../assets/images/khaledImgBook.webp';
import khaledMainImage from '../assets/images/khaledImgKhutbaRead.webp';
import khaledMasjidImage from '../assets/images/khaledImgMasjid.webp';
import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.colors.mainColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const ImgMain = styled.img`
  width: 100%;
  filter: sepia(10%);
  opacity: 60%;
`;

const Main = () => {
  return (
    <>
      <MainBox>
        <Button />
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
