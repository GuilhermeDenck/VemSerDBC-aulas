import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Menu from './Menu.component';
import style from './Header.module.css';

const Header = () => {
  const { isLogged } = useContext(AuthContext);

  useEffect(() => {
    isLogged();
  },[])
  return (
    <header className={style.header}>
        <Menu />
    </header>
  )
}


export default Header