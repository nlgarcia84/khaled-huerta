import React from 'react';
import studies from '../assets/studies';
import styled from 'styled-components';

const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
`;

const StudiesContainer = styled.div`
  margin: ${(props) => props.theme.pageSpaces.margin};
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: center;
`;

const ItemList = styled.li`
  background-color: ${(props) => props.theme.colors.mainColor};
  color: white;
  padding: 0.5em;
  margin: 1em 0;
`;

const ItemTitle = styled.p`
  background-color: white;
  color: ${(props) => props.theme.colors.mainColor};
  padding: 1em 0.5em;
`;

export const Studies = () => {
  return (
    <>
      <StudiesContainer>
        <PageTitle>Breve descripción de mis estudios</PageTitle>
        <List>
          {studies.map((element) => (
            <ItemList key={element.id}>
              <ItemTitle>{element.value}</ItemTitle>
              <p>{element.location}</p>
            </ItemList>
          ))}
        </List>
      </StudiesContainer>
    </>
  );
};
