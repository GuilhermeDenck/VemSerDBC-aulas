
import Logo from '../logo/Logo.component';
import Nav from '../nav/Nav.component';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.navConteudo}>
        <div className={styles.imgHeader}>
          <Logo width={100}/>
          <span> Melhores Alunos do vemSer de todo os tempos </span>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;