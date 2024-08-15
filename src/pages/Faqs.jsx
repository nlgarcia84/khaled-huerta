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
  background-color: ${(props) => props.theme.colors.menuFaqColor};
  padding: 1em;
  margin: 0.5em;
`;

const ItemFaqMenu = styled.li`
  padding: 1em;
`;

export const Faqs = () => {
  const [description, setDescription] = useState([]);

  const toggleDescription = (id) => {};

  return (
    <>
      <FaqContainer>
        <h2>Preguntas frecuentes</h2>
        <FaqMenu>
          {faqs.map((faq) => (
            <ItemFaqMenu key={faq.id}>{faq.title}</ItemFaqMenu>
          ))}
        </FaqMenu>
      </FaqContainer>
    </>
  );
};
