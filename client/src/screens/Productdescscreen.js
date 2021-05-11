import productData from '../products';

const Productdescscreen = ({ match }) => {
  const productid = Number(match.params.id);
  const product = productData.find(data => data.id === productid);
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card p-2 m-2'>
            <h1>{product.name}</h1>
            <img
              src={product.image}
              alt={product.name}
              className='img-fluid m-3 bigimg'
            />
            <p>{product.description}</p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='m-2'>
            <h1>Price: {product.price}</h1>
            <hr />
            <h1>Select Quantity</h1>
            <select>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button type='button' className='btn btn-dark'>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdescscreen;
