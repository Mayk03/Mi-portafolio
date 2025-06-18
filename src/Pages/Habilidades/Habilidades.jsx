import styled from "styled-components";

const Contenedor = styled.section`
  padding: 3rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ListaHabilidades = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

const Habilidad = styled.li`
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Habilidades = () => {
  const habilidades = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Styled Components",
    "Git & GitHub",
    "Responsive Design",
    "Accesibilidad",
    "APIs REST",
  ];

  return (
    <Contenedor>
      <Titulo>Habilidades Técnicas</Titulo>
      <ListaHabilidades>
        {habilidades.map((item, index) => (
          <Habilidad key={index}>{item}</Habilidad>
        ))}
      </ListaHabilidades>
    </Contenedor>
  );
};

export default Habilidades;