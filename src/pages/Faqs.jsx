import React, { useState } from 'react';
import faqs from '../assets/faqs';
import styled from 'styled-components';

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em 2em;
`;

const PageTitle = styled.h2`
  color: ${(props) => props.theme.colors.textColor};
`;

const FaqMenu = styled.ul`
  list-style: none;
  padding: 1em;
  margin: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.mainColor};
`;

const ItemFaqMenu = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;

  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.textColor
      : props.theme.colors.mainColor};
  padding: 1em;
  margin-bottom: 0.5em;
`;

const ItemTitle = styled.div`
  font-weight: ${(props) =>
    props.isSelected
      ? props.theme.fontWeight.bold
      : props.theme.fontWeight.regular};
`;

const ItemDescription = styled.div`
  padding: 0.5em;
`;

export const Faqs = () => {
  // muestra la descripcion del item cuando se clica encima
  const [selectedItemId, setSelectedItemId] = useState(null);

  const toggleDescription = (id) => {
    setSelectedItemId((prevState) => (prevState === id ? null : id));
  };

  return (
    <>
      <FaqContainer>
        <PageTitle>Preguntas frecuentes</PageTitle>
        <FaqMenu>
          {faqs.map((faq) => (
            <ItemFaqMenu
              onClick={() => toggleDescription(faq.id)}
              key={faq.id}
              isSelected={selectedItemId === faq.id}
            >
              <ItemTitle isSelected={selectedItemId === faq.id}>
                {faq.title}
              </ItemTitle>

              {selectedItemId === faq.id && (
                <ItemDescription>{faq.description}</ItemDescription>
              )}
            </ItemFaqMenu>
          ))}
        </FaqMenu>
      </FaqContainer>
    </>
  );
};
