import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./components/Menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/sobre" element={<About />}  />
        <Route path="*" element={<div>Pagina não encontrada :( </div>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
