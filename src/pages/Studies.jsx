import React from 'react';
import styled from 'styled-components';

const MyStudies = styled.div`
  margin: 5em 2em;
`;

export const Studies = () => {
  return (
    <>
      <MyStudies>
        <h2>Breve biografía de estudios</h2>
        <p>
          Graduado del bachillerato oficial número 73, Tecámac Estado de México.
          Graduado del instituto de aprendizaje de la lengua árabe en Medina,
          Arabia Saudita. Graduado de la facultad de las ciencias del hadith en
          la universidad islámica de Medina.
        </p>
      </MyStudies>
    </>
  );
};
