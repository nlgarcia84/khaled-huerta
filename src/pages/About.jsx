import styled from 'styled-components';
import khaledImgProfile from '../assets/images/khaledImgProfile.jpg';
import khaledImgFlat from '../assets/images/khaledImgFlat.jpeg';

const Biography = styled.div`
  margin: 5em 2em;
`;

const TitleCard = styled.h2`
  position: absolute;
  z-index: 1;
  color: ${(props) => props.theme.colors.mainColor};
  background-color: white;
  width: 40%;
  padding: 0.5em 1em;
  text-align: center;
`;

const ImageCard = styled.img`
  position: relative;
  width: 100%;
  filter: sepia(40%);
  opacity: 60%;
`;

export const About = () => {
  return (
    <>
      <Biography>
        <h1>¿Quién soy?</h1>
        <div>
          <TitleCard>Islam</TitleCard>
          <ImageCard src={khaledImgProfile} />
        </div>
        <p>
          Mi nombre es Cesar Obed Naín Espinosa Huerta, soy mexicano tengo
          treinta y dos años, conocí el islam a los dieciocho y me tomó seis
          meses aceptar el mensaje del islam. Nací y crecí en el estado de
          México en un lugar llamado Tecámac. Estudié la primaria, secundaria,
          bachillerato y una parte de la carrera de marketing en Tecámac, luego
          conseguí la beca para aprender la lengua árabe y ciencias islámicas en
          Medina Arabia Saudita, a los diecinueve años viaje a Medina y comencé
          a estudiar el idioma árabe, ese curso oficialmente dura dos años,
          aunque para mi fueron tres debido a que no tenía ningún conocimiento
          previo del idioma así que me retrasé en terminarlo, luego me
          especialice en la facultad de las ciencias del hadith, una
          licenciatura que duró cuatro años.
        </p>
        <div>
          <TitleCard>Deporte</TitleCard>
          <ImageCard src={khaledImgFlat} />
        </div>
        <p>
          Practico el bmx flatland o ciclismo acrobático hace catorce años,
          conocí este deporte mediante un vecino amigo de mi hermana que me
          invitó a practicar con él en Tecámac, comencé con una bicicleta muy
          simple y pesada no recuerdo la marca, estaba emocionado y motivado al
          reunirme con aquel chico que admiraba como dominaba la bicicleta, al
          pasar el tiempo comencé a ahorrar dinero para mejorar la piezas de mi
          bicicleta para incrementar el nivel y facilitarle a mi cuerpo teniendo
          una bicicleta de menos peso. Comencé a adoptar un entrenamiento
          constante e intenso que pasé a competir a nivel nacional obteniendo
          los primeros puestos en la mayoría de las competiciones del país,
          posteriormente competí a nivel internacional en países como: Filipinas
          en el cual obtuve el tercer puesto, también competí en Arabia Saudita
          alcanzando el primer lugar a nivel amateur por segunda vez. Puedo
          expresar que más que un deporte el flatland para mi es un grandioso
          modo de vida pues me enseña y me recuerda lo importante que es la
          persistencia y perseverancia en el proceso de conseguir un truco o
          combo y lo relaciono con la vida, en parte de eso se trata, e debe
          persistir y ser paciente para conseguir el objetivo.
        </p>
      </Biography>
    </>
  );
};
