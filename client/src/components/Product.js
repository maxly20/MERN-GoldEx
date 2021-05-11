import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Product = ({ product }) => {
  return (
    <div className='col-md-3 m-3 card p-2 text-left'>
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className='img-fluid' alt={product.name} />
          <h1>{product.name}</h1>
          <Rating
            style={{ color: 'orange' }}
            initialRating={product.rating}
            emptySymbol='fa fa-star-o fa-1x'
            fullSymbol='fa fa-star fa-1x'
          />
          <h1>Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  );
};

export default Product;
