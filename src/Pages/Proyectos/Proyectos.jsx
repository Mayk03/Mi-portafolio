import { useEffect, useState } from "react";
import styled from "styled-components";

const ContenedorProyectos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const ProyectoCard = styled.article`
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h3 {
    font-size: 1.2rem;
    margin: 1rem;
  }

  p {
    font-size: 1rem;
    margin: 0 1rem 1rem;
  }

  a {
    display: block;
    margin: 0 1rem 1rem;
    color: #0077cc;
    font-weight: bold;
  }
`;

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch(
      "https://68423121e1347494c31c16df.mockapi.io/proyecto/links-proyectos"
    )
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => console.error("Error cargando proyectos:", err));
  }, []);

  return (
    <ContenedorProyectos>
      {proyectos.map(({ id, titulo, descripcion, link }) => (
        <ProyectoCard key={id}>
          <img
            src={`/img/proyecto${id}.png`}
            alt={`Vista previa de ${titulo}`}
          />
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Ver proyecto
          </a>
        </ProyectoCard>
      ))}
    </ContenedorProyectos>
  );
};

export default Proyectos;