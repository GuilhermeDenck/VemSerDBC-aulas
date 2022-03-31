import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import Home from './pages/Home/Home';
import Adress from './pages/Adress/Adress';
import CreateUser from './pages/Createuser/CreateUser';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <Header />
              <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/adress" element={<Adress />} />
                <Route path='/create-user' element={<CreateUser />}>
                  <Route path=':id' element={<CreateUser />} />
                </Route>
              </Routes>
            <Footer />
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
