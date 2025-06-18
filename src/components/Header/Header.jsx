import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled(motion.header)`
  background-color: #0f172a;
  color: #ffffff;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nombre = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #06b6d4;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const NavItem = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #f9f5f0;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;

  &.active {
    color: #06b6d4;
    border-color: #06b6d4;
  }

  &:hover {
    color: #06b6d4;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      role='banner'
    >
      <Nombre>Maycol Quinto</Nombre>
      <Nav aria-label='Navegación principal'>
        <NavItem
          to='/'
          end
        >
          Sobre mí
        </NavItem>
        <NavItem to='/habilidades'>Habilidades</NavItem>
        <NavItem to='/aficiones'>Aficiones</NavItem>
        <NavItem to='/formacion'>Formación</NavItem>
        <NavItem to='/proyectos'>Proyectos</NavItem>
        <NavItem to='/contacto'>Contacto</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
