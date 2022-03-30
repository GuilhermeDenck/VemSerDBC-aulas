import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <Link to={'/'}>Logo</Link>
    </div>
  )
}

export default Logo;