import './Product.scss';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='product'>
      <img src='https://i.ibb.co/2c0z6Dj/01.jpg' alt='product name' />
      <div className='product__info'>
        <p className='info__name'>Product 1</p>
        <p className='info__description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
          nostrum?
        </p>
        <p className='info__price'>$499.99</p>
        <Link to={`/products/${1111}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Products;
