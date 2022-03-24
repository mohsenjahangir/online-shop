
import './App.css';
import Navbar from './componants/Navbar'
import Home from './componants/Home';
import { Switch, Rout } from 'react-router-dom'
import Products from './componants/Products';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Rout exact path="/" component={Home} />
        <Rout exact path="/products" component={Products} />
        <Home />
      </Switch>
    </>
  );
}

export default App;
