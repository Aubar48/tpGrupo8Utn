import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contacto from "./pages/contacto/Contacto";
import { About } from "./pages/about/About";
import PoliciesPrivacy from "./pages/policiesPrivacy/PoliciesPrivacy";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />
          <Route path="/policiesPrivacy" element={<PoliciesPrivacy />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
