import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Initial from './pages/Initial';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer.component';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Initial />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;