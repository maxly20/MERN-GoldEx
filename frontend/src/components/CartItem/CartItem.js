import './CartItem.scss';
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className='cartitem'>
      <div className='caritem__image'>
        <img src='https://i.ibb.co/2c0z6Dj/01.jpg' alt='Product Name' />
      </div>
      <Link to={`/products/${111}`} className='cartItem__name'>
        <p>Product 1</p>
      </Link>
      <p className='cartitem__price'>$499.99</p>

      <select className='cartItem__select'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>

      <button className='cartItem__deleteBtn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
