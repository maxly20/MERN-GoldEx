import { Route, Switch } from 'react-router-dom';
// SCREENS
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
// COMPONENTS
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      {/* SideDrawer  */}
      {/* Backdrop  */}
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
        </Switch>
      </main>
    </>
  );
};

export default App;
