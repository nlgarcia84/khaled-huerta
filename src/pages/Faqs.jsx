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
  color: white;
  text-align: center;
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 1em;
  margin-bottom: 0.5em;
`;

const ItemDescription = styled.div`
  background-color: ${(props) => props.theme.colors.itemMenuFaqColor};
  margin-top: 1em;
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
          <div>
            {faqs.map((faq) => (
              <ItemFaqMenu onClick={toggleDescription} key={faq.id}>
                {faq.title}
                <ItemDescription>
                  {description && faq.description}
                </ItemDescription>
              </ItemFaqMenu>
            ))}
          </div>
        </FaqMenu>
      </FaqContainer>
    </>
  );
};
