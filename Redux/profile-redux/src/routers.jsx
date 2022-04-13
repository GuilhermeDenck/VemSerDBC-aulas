import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { apiAuth } from './service/api';
import { connect } from 'react-redux';
import { isAuth } from './store/actions/AuthActions';

import { Header } from './components';
import { Login, Home, Profile, NotFound } from './pages';

const Routers = ({auth, dispatch}) => {

  useEffect( () => {
    const token = localStorage.getItem('token');
    if(token) {
      apiAuth.defaults.headers.common['Authorization'] = token
      isAuth(dispatch);
    }
  },[]);

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={ <Profile /> }/>
          <Route path="*" element={ <NotFound/> } />
        </Routes>
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
})

export default connect(mapStateToProps)(Routers);