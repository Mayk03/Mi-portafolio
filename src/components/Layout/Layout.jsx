import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
  background-color: #f9f5f0;
`;

const Main = styled.main`
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  & > *:not(section:first-of-type) {
    padding: 2rem;

    @media (max-width: 768px) {
      padding: 1.5rem 1rem;
    }
  }
`;

export default function Layout() {
  return (
    <PageWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </PageWrapper>
  );
}