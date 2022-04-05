import { FC, createContext, useEffect } from 'react';
import { LoginDTO } from '../model/LoginDTO';
import { useNavigate } from "react-router-dom";
import api from '../service/api'

export const AuthContext = createContext({});

const AuthProvider: FC<any> = ({children }) => {

  const navigate = useNavigate();

  const handleLogin = async (user: LoginDTO) => {
    try {
      const {data} = await api.post('/auth', user);
      localStorage.setItem('token', data);
      api.defaults.headers.common['Authorization'] = data;
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const isLogged = () => {
    const hasToken = localStorage.getItem('token');
    if(!hasToken) navigate('/login')
  }

  useEffect(() => {
    const hasToken = localStorage.getItem('token');
    if(hasToken) {
      api.defaults.headers.common['Authorization'] = hasToken;
    }

    isLogged();
  },[]);

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;