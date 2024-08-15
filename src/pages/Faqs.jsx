import React, { useState } from 'react';
import faqs from '../assets/faqs';
import styled from 'styled-components';

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em 2em;
`;

const FaqMenu = styled.ul`
  list-style: none;
  padding: 1em;
  margin: 0.5em;
  border: 2px solid ${(props) => props.theme.colors.mainColor};
`;

const ItemFaqMenu = styled.li`
  padding: 1em;
`;

const ItemDescription = styled.div`
  background-color: ${(props) => props.theme.colors.itemMenuFaqColor};
`;

export const Faqs = () => {
  const [description, setDescription] = useState(false);

  const toggleDescription = () => {
    setDescription(!description);
  };

  return (
    <>
      <FaqContainer>
        <h2>Preguntas frecuentes</h2>
        <FaqMenu>
          {faqs.map((faq) => (
            <ItemFaqMenu onClick={toggleDescription} key={faq.id}>
              {faq.title}
              {description && faq.description}
            </ItemFaqMenu>
          ))}
        </FaqMenu>
      </FaqContainer>
    </>
  );
};
