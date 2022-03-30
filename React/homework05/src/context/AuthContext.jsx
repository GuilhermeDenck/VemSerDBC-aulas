import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const {data} = await api.post('/auth', values);
      setToken(data);
      localStorage.setItem('token', data);
      setLoading(false);
      api.defaults.headers.common['Authorization'] = data;
      navigate('/users');
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    setLoading(false);
    localStorage.removeItem('token');
    navigate('/login');
  }

  const isLogged = () => {
    const hasToken = localStorage.getItem('token');
    if(!hasToken) {
      navigate('/login');
    }
  }

  useEffect(() => {
    const hasToken = localStorage.getItem('token');
    if(hasToken) {
      api.defaults.headers.common['Authorization'] = hasToken;
    }
    setLoading(false);
  },[]);

  if(loading) return (<h1>Loading...</h1>);

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, isLogged}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;