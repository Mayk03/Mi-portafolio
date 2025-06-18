import styled from "styled-components";

const PiePagina = styled.footer`
  background-color: #0f172a; /* azul oscuro profesional */
  color: #e2e8f0; /* gris muy claro */
  text-align: center;
  padding: 2.5rem 1rem;
  font-family: "Poppins", sans-serif;
`;

const Texto = styled.p`
  margin: 1rem 0 0.5rem;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  a {
    display: inline-block;
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: auto;
    filter: brightness(0) invert(1);
  }
`;

const Footer = () => {
  return (
    <PiePagina
      role='contentinfo'
      aria-label='Pie de página'
    >
      <Redes>
        <a
          href='https://github.com/Mayk03'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Perfil de GitHub'
        >
          <img
            src='/img/logos/github.png'
            alt='GitHub'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/maycol-quinto-6bb302287/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Perfil de LinkedIn'
        >
          <img
            src='/img/logos/linkedin.png'
            alt='LinkedIn'
          />
        </a>
      </Redes>
      <Texto>
        © {new Date().getFullYear()} Maycol Quinto – Desarrollador Front-End
      </Texto>
    </PiePagina>
  );
};

export default Footer;