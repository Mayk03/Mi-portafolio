import styled from "styled-components";

const Contenedor = styled.section`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;
  color: #2e2e2e;
`;

const Titulo = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #333;
`;

const Subtitulo = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #334155;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }
`;

const Nombre = styled.p`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
`;

const Detalle = styled.p`
  margin: 0.25rem 0;
  font-size: 1rem;
  color: #555;
`;

const Formacion = () => {
  return (
    <Contenedor>
      <Titulo>Formación</Titulo>
      <Subtitulo>Certificación: Alura Latam</Subtitulo>
      <Lista>
        <Item>
          <Nombre>Fundamentos de Front‑End</Nombre>
          <Detalle>HTML, CSS, JavaScript</Detalle>
          <Detalle>Diseño responsivo con Flexbox y layouts modernos</Detalle>
          <Detalle>Buenas prácticas semánticas y accesibilidad web</Detalle>
        </Item>
        <Item>
          <Nombre>JavaScript Intermedio y Avanzado</Nombre>
          <Detalle>Manejo del DOM, eventos, lógica de programación</Detalle>
          <Detalle>POO, control de flujo, consumo de APIs con Fetch</Detalle>
          <Detalle>Creación de solicitudes y manejo de respuestas</Detalle>
        </Item>
        <Item>
          <Nombre>React.js</Nombre>
          <Detalle>Componentes funcionales y uso de Hooks</Detalle>
          <Detalle>Estilado con styled-components y archivos estáticos</Detalle>
          <Detalle>Navegación entre rutas con React Router</Detalle>
        </Item>
        <Item>
          <Nombre>Creación de Páginas Dinámicas</Nombre>
          <Detalle>
            Proyectos interactivos con integración de datos y estructura modular
          </Detalle>
        </Item>
        <Item>
          <Nombre>Experiencia de Usuario (UX) y Buenas Prácticas</Nombre>
          <Detalle>
            Componentización, manejo de estado, y control de versiones
          </Detalle>
        </Item>
      </Lista>
    </Contenedor>
  );
};

export default Formacion;