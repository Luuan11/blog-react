import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./components/Menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />} >
          <Route index element={<Home />}  />
          <Route path="sobre" element={<About />}  />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<div> Pagina não encontrada :( </div>}  />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
