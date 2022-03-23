
import Header from './components/header/Header.component';
import Home from './pages/home/Home.component';
import About from './pages/about/About.component';
import Contact from './pages/contact/Contact.component';
import Footer from './components/footer/Footer.component';
import './App.css';

function App() {
  return (
    <>
      <Header />
        <div className="container">
          <Home />
          {/* <About /> */}
          {/* <Contact /> */}
        </div>
      <Footer />
    </>
  );
}

export default App;
