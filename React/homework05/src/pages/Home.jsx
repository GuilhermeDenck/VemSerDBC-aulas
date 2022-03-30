import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';


const Home = () => {

  const { isLogged } = useContext(AuthContext);
  useEffect( () => {
    isLogged();
  },[]);

  return (
    <div>Home</div>
  )
}

export default Home;