const Product = ({ product }) => {
  return (
    <div className='col-md-3 m-5 card p-2'>
      <div>
        <img src={product.image} className='img-fluid' alt={product.name} />
        <h1>{product.name}</h1>
        <h1>Rating: {product.rating}</h1>
        <h1>Price: {product.price}</h1>
      </div>
    </div>
  );
};

export default Product;
