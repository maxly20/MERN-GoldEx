import products from '../products';

const Homescreen = () => {
  return (
    <div>
      <h1>This is the Homescreen</h1>
      <h1>{products.length}</h1>
    </div>
  );
};

export default Homescreen;
