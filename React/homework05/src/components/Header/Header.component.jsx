import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Menu from './Menu.component';

const Header = () => {
  const { isLogged } = useContext(AuthContext);

  useEffect(() => {
    isLogged();
  },[])
  return (
    <div>
        <Menu />
    </div>
  )
}


export default Header