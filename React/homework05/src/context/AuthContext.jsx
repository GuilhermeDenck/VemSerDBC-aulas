import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState('');
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const {data} = await api.post('/auth', values);
      setToken(data);
      localStorage.setItem('token',JSON.stringify(data));
      setLogin(true);
      api.defaults.headers.Authorization = data;
      navigate('/users');
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, login}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;