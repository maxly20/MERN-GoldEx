import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* logo  */}
      <div className='navbar__logo'>
        <h2>GoldEx</h2>
      </div>
      {/* Links  */}
      <ul className='navbar__links'>
        <li>
          <Link to="/cart">

          </Link>
        </li>
      </ul>
      {/* burger menu */}
    </nav>
  );
};

export default Navbar;
