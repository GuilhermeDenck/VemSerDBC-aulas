import styles from './Logo.module.css';
import LogoMario from '../../images/coguMario.png';

const Logo = ({width}) => {
  return (
    <img className={styles.imgCogu} src={LogoMario} alt="Cogumelo Mario" width={width}/>
  );
}

export default Logo;