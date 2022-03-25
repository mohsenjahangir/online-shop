
import './App.css';
import Navbar from './componants/Navbar'
import Home from './componants/Home';
import {Switch,Route} from 'react-router-dom'
import Products from './componants/Products';
import Product from './componants/Product';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
