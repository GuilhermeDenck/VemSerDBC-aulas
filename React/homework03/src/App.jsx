import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Perfil from "./pages/Perfil/Perfil";
import Repo from "./pages/Repo/Repo";
import Contact from "./pages/Contact/Contact";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Perfil />} />
            <Route path="/repostiroios" element={<Repo />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
