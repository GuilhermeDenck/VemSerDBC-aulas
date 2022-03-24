import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo.components';

import Linkedin from '../../Assets/linkedin.svg';
import GitHub from '../../Assets/github.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.navBar}>
      <nav>
        <ul>
          <li><Link to="/">Perfil</Link></li>
          <li><Link to="/repositorios">Repositórios</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
      <div className={styles.logos}>
        <Logo caminho={'https://www.linkedin.com/in/guilherme-denck/'} src={Linkedin} alt={"Logo do LinkedIn"}/>
        <Logo caminho={'https://github.com/GuilhermeDenck'} src={GitHub} alt={"Logo do GitHub"}/>
      </div>
    </header>
  )
}

export default Header;