import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom"

const Header = () => {

  const {handleLogout} = useContext<any>(AuthContext);

  const token = localStorage.getItem('token');
  const isLogged = token ? true : false;

  return (
    <nav>
        {
          isLogged ? (
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/users'}>Users</Link></li>
              <li><Link to={'/address'}>Address</Link></li>
              <li> <button onClick={handleLogout}> Logout </button> </li>
            </ul>
          ) : (
            <ul>
              <li><Link to={'/login'}>Login</Link></li>
            </ul>
          )
        }
    </nav>
  )
}

export default Header