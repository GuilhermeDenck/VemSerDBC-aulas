import { useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";


const Users = () => {

  const { handleLogout } = useContext(AuthContext);
  const navigation = useNavigate();

  useEffect( () => {
    const webToken = localStorage.getItem('token');
    if(!webToken) {
      navigation('/login');
    }
  }, []);
  
  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Users;