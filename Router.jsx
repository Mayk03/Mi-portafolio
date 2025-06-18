import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SobreMi from "./src/Pages/SobreMi/SobreMi";
import Habilidades from "./src/Pages/Habilidades/Habilidades";
import Aficiones from "./src/Pages/Aficiones/Aficiones";
import Formacion from "./src/Pages/Formacion/Formacion";
import Proyectos from "./src/Pages/Proyectos/Proyectos";
import Contacto from "./src/Pages/Contacto/Contacto";
import Error404 from "./src/Pages/Error404/Error404";
import Layout from "./src/components/Layout/Layout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<SobreMi />}
          />
          <Route
            path='/habilidades'
            element={<Habilidades />}
          />
          <Route
            path='/aficiones'
            element={<Aficiones />}
          />
          <Route
            path='/formacion'
            element={<Formacion />}
          />
          <Route
            path='/proyectos'
            element={<Proyectos />}
          />
          <Route
            path='/contacto'
            element={<Contacto />}
          />
        </Route>
        <Route
          path='*'
          element={<Error404 />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;