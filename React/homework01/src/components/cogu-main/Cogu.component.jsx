import Logo from '../logo/Logo.component';
import styles from './Cogu.module.css';

const Cogu = () => {
  return (
    <div className={styles.coguCenter}>
      <Logo width={180}/>
    </div>
  );
}

export default Cogu;