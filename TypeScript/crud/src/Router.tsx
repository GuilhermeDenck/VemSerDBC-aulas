import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import { Header, Footer } from './components';

import { Home, Login, Users, Address } from './pages';

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/login' element={ <Login /> }/>
            <Route path='/users' element={ <Users /> }/>
            <Route path='/address' element={ <Address /> }/>
            <Route path='*' element={ <Home /> }/>
          </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers;
