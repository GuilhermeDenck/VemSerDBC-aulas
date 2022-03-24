import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Initial</Link>
        </li>
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;