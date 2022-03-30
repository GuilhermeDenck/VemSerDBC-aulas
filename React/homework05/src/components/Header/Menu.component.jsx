import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Logo from './Logo.component';

const Menu = () => {
  const { handleLogout } = useContext(AuthContext);
  const hasToken = localStorage.getItem('token');
  return (
    <div>
        <Logo />
        { hasToken ? 
        <div>
            <li>  <Link to='/users'> Users </Link> </li>
            <li>  <Link to='/'> Home </Link> </li>
            <button onClick={handleLogout}>Deslogar</button>
        </div>
         : <li>  <Link to='/login'> login </Link> </li> }
    </div>
  )
}

export default Menu;