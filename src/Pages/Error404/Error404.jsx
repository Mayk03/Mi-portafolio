import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const Wrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(145deg, #0e0e0e, #1a1a1a);
  color: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const Icon = styled(AlertCircle)`
  color: #ff4d4d;
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 12rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(90deg, #00ffd0, #00c9a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #b3b3b3;
  max-width: 600px;
  margin-top: 1rem;
`;

const BackLink = styled(Link)`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #00ffd0;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 2px solid #00ffd0;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ffd0;
    color: #121212;
  }
`;

const Error404 = () => {
  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      role='alert'
      aria-labelledby='notfound-title'
    >
      <Icon aria-hidden='true' />
      <Title id='notfound-title'>404</Title>
      <Message>
        La página que estás buscando no existe o ha sido movida.
      </Message>
      <BackLink to='/'>Volver al inicio</BackLink>
    </Wrapper>
  );
};

export default Error404;