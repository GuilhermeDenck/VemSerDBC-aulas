import { FC, createContext, useEffect, useState } from 'react';
import { LoginDTO } from '../model/LoginDTO';
import { useNavigate } from "react-router-dom";
import api from '../service/api'

export const AuthContext = createContext({});

const AuthProvider: FC<any> = ({children }) => {

  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken ] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (user: LoginDTO) => {
    try {
      const {data} = await api.post('/auth', user);
      localStorage.setItem('token', data);
      api.defaults.headers.common['Authorization'] = data;
      setLoading(false);
      setHasToken(true);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken(false);
    navigate('/login');
  }

  const isLogged = () => {
    const hasToken = localStorage.getItem('token');
    if(!hasToken) {
      navigate('/login');
    } else {
      setHasToken(true);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      console.log('entrou no if');
      
      api.defaults.headers.common['Authorization'] = token;
      setHasToken(true);
    }

    isLogged();
    console.log(api.defaults.headers.common['Authorization']);
  },[]);

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, loading, error, hasToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;