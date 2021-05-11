import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homescreen} />
        <Route path='/product/:id' component={Productdescscreen} />
      </Switch>
    </div>
  );
};

export default App;
