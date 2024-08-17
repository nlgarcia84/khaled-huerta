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
  border: 3px solid ${(props) => props.theme.colors.mainColor};
`;

const ItemFaqMenu = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 1em;
  margin-bottom: 0.5em;
`;

const ItemDescription = styled.div``;

export const Faqs = () => {
  const [description, setDescription] = useState(null);

  const toggleDescription = (id) => {
    setDescription((prevState) => (prevState === id ? null : id));
  };

  return (
    <>
      <FaqContainer>
        <h2>Preguntas frecuentes</h2>
        <FaqMenu>
          <div>
            {faqs.map((faq) => (
              <ItemFaqMenu
                onClick={() => toggleDescription(faq.id)}
                key={faq.id}
              >
                {faq.title}
                {description === faq.id && (
                  <ItemDescription>{faq.description}</ItemDescription>
                )}
              </ItemFaqMenu>
            ))}
          </div>
        </FaqMenu>
      </FaqContainer>
    </>
  );
};
