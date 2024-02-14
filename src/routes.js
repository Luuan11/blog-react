import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./components/Menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />} >
          <Route path="/" element={<Home />}  />
          <Route path="/sobre" element={<About />}  />
        </Route>

        <Route path="*" element={<div> Pagina não encontrada :( </div>}  />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
