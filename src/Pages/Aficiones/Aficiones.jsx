import styled from "styled-components";

// Sección
const Seccion = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

// Lista de hobbies
const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

// Tarjetas individuales
const Tarjeta = styled.article`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const Icono = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #0077cc;
`;

const Subtitulo = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Texto = styled.p`
  font-size: 1rem;
  color: #444;
`;

const Aficiones = () => {
  return (
    <Seccion
      id='hobbies'
      aria-labelledby='hobbies-heading'
    >
      <Titulo id='hobbies-heading'>Aficiones</Titulo>
      <Lista role='list'>
        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-book'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Lectura</Subtitulo>
          <Texto>
            Sumergirme en libros que amplían mi conocimiento y creatividad.
          </Texto>
        </Tarjeta>

        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-guitar'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Tocar guitarra</Subtitulo>
          <Texto>
            Explorar melodías que inspiran mi imaginación y me brindan momentos
            de alegría.
          </Texto>
        </Tarjeta>

        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-plane'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Viajar</Subtitulo>
          <Texto>Explorar nuevas culturas, paisajes y perspectivas.</Texto>
        </Tarjeta>

        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-heart'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Deportes</Subtitulo>
          <Texto>Disfrutar del ejercicio físico y el trabajo en equipo.</Texto>
        </Tarjeta>

        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-headphones-alt'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Oír música</Subtitulo>
          <Texto>
            Sumergirme en un universo sonoro que me conecta con mis emociones.
          </Texto>
        </Tarjeta>

        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-tv'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Ver series</Subtitulo>
          <Texto>
            Disfrutar de historias cautivadoras que me transportan a otros
            mundos.
          </Texto>
        </Tarjeta>

        <Tarjeta role='listitem'>
          <Icono>
            <i
              className='fas fa-utensils'
              aria-hidden='true'
            ></i>
          </Icono>
          <Subtitulo>Cocinar</Subtitulo>
          <Texto>
            Dejarme llevar por la creatividad culinaria y disfrutar del proceso.
          </Texto>
        </Tarjeta>
      </Lista>
    </Seccion>
  );
};

export default Aficiones;