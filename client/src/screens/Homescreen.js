import products from '../products';
import Product from '../components/Product';

const Homescreen = () => {
  return (
    <div>
      <div className='row justify-content-center'>
        {products.map(product => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default Homescreen;
