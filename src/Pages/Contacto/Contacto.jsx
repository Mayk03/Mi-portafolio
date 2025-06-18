import styled, { keyframes } from "styled-components";

// Animación de entrada
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Contenedor = styled.section`
  padding: 3rem 1rem;
  max-width: 600px;
  margin: 0 auto;
  color: #2e2e2e;
`;

const Titulo = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  animation: ${fadeUp} 0.6s ease forwards;
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #444;
`;

const Input = styled.input`
  padding: 0.85rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fafafa;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #06b6d4;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 191, 166, 0.15);
  }
`;

const Textarea = styled.textarea`
  padding: 0.85rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fafafa;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #06b6d4;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 191, 166, 0.15);
  }
`;

const Boton = styled.button`
  padding: 1rem;
  background-color: #06b6d4;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #059dc2;
    transform: scale(1.03);
  }
`;

const Contacto = () => {
  return (
    <Contenedor>
      <Titulo>Contáctame</Titulo>
      <Form
        action='https://formsubmit.co/maycolq2203@gmail.com'
        method='POST'
      >
        <Campo>
          <Label htmlFor='nombre'>Nombre</Label>
          <Input
            type='text'
            id='nombre'
            name='nombre'
            required
          />
        </Campo>

        <Campo>
          <Label htmlFor='correo'>Correo electrónico</Label>
          <Input
            type='email'
            id='correo'
            name='correo'
            required
          />
        </Campo>

        <Campo>
          <Label htmlFor='mensaje'>Mensaje</Label>
          <Textarea
            id='mensaje'
            name='mensaje'
            required
          />
        </Campo>

        <Boton type='submit'>Enviar mensaje</Boton>
      </Form>
    </Contenedor>
  );
};

export default Contacto;