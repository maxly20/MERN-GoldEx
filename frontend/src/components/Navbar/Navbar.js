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
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            Cart
            <span className='cartlogo__badge'>0</span>
          </Link>
        </li>
      </ul>
      {/* burger menu */}
      <div className='hamburger__menu'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
