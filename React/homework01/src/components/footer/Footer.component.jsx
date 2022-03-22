import Nav from '../nav/Nav.component';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudoFooter}>
        <address>AV.Andarai 531 - Porto Alegre</address>
        <Nav />
      </div>
    </footer>
  );
}

export default Footer;