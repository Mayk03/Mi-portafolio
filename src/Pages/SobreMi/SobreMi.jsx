import styled from "styled-components";

const FondoHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(135deg, #0f172a, #06b6d4);
  z-index: 0;

  @media (max-width: 768px) {
    position: relative;
    background: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 3rem 4rem;
  gap: 2rem;
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    background: linear-gradient(180deg, #0f172a, #06b6d4);
  }
`;

const Contenido = styled.div`
  flex: 1;

  h2 {
    font-size: 2.2rem;
    color: #f8fafc;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    max-width: 700px;
    font-size: 1.2rem;
    color: #e2e8f0;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.05rem;
      margin: 0 auto;
    }
  }
`;

const Foto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0f172a;
  background-color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25), 0 6px 10px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) translateZ(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
    margin-bottom: 1rem;
  }
`;

const ContenidoSobreMi = styled.section`
  padding: 3rem 2rem;
  max-width: 850px;
  margin: 7rem auto 7rem;
  font-size: 1.3rem;
  line-height: 1.7;
  color: #1e293b;

  h2 {
    font-size: 1.9rem;
    margin-bottom: 1.2rem;
    color: #0f172a;
    text-align: center;
  }

  p {
    text-align: justify;
    color: #334155;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.2rem;
    font-size: 1rem;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

const SobreMi = () => {
  return (
    <>
      <FondoHero />
      <Wrapper>
        <Hero>
          <Contenido>
            <h2>Construyendo experiencias digitales que inspiran</h2>
            <p>
              Desarrollador Front-End especializado en HTML, CSS, JavaScript y
              React, creando experiencias visuales modernas y atractivas.
            </p>
          </Contenido>

          <Foto
            src='/img/logos/Foto.jpg'
            alt='Maycol Quinto'
          />
        </Hero>

        <ContenidoSobreMi>
          <h2>Sobre mí</h2>
          <p>
            Soy un apasionado del desarrollo web enfocado en crear interfaces
            intuitivas y eficientes con HTML, CSS y JavaScript, especialmente
            con React. Me gusta transformar ideas en soluciones digitales
            visualmente impactantes, accesibles y fáciles de usar. Siempre estoy
            en constante aprendizaje, explorando nuevas tecnologías y mejores
            prácticas para entregar resultados de alta calidad. Cuando no estoy
            programando, me encanta experimentar con nuevas herramientas y estar
            al día con las tendencias del frontend moderno.
          </p>
        </ContenidoSobreMi>
      </Wrapper>
    </>
  );
};

export default SobreMi;