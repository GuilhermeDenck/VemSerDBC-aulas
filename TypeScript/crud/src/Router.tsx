import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import PersonProvider from './context/PersonContext';
import { Header } from './components';

import { Home, Login, Users, Address, FormAddress } from './pages';

import './index.css';
const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PersonProvider>
          <div className='main'>
            <Header/>
              <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/login' element={ <Login /> }/>
                <Route path='/users' element={ <Users /> }/>
                <Route path='/address' element={ <Address /> } /> 
                <Route path='/register-address' element={ <FormAddress /> } />
                
                <Route path='*' element={ <Home /> }/>
              </Routes>
          </div>
        </PersonProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers;
