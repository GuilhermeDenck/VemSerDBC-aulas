import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Logo from './Logo.component';
import style from './Header.module.css'; 

const Menu = () => {
  const { handleLogout } = useContext(AuthContext);
  const hasToken = localStorage.getItem('token');
  return (
    <div className={style.navBar}>
        <Logo />
        { hasToken ? 
        <div className={style.navBarLi}> 
            <li>  <Link to='/users'> Users </Link> </li>
            <li>  <Link to='/'> Home </Link> </li>
            <li>  <Link to='/adress'> Endereço </Link> </li>
            <button className={style.btnLogout} onClick={handleLogout}>Deslogar</button>
        </div>
         : (
           <div className={style.navBarLi}>
              <li>  <Link to='/login'> Login </Link> </li>
           </div>
         )
        }
    </div>
  )
}

export default Menu;