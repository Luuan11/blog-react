import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "pages/NotFound";
import Post from "pages/Post";

import Menu from "./components/Menu";
import Footer from "components/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "components/DefaultPage";

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

        <Route path="*" element={<NotFound />}  />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
