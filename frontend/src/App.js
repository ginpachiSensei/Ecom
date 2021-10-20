import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import UserRegister from './screens/UserRegister';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Container className="py-3">
        {/* <HomeScreen /> */}
        <Switch>
        <Route path="/" exact><HomeScreen /></Route>
        <Route path="/product/:id"><ProductScreen /></Route>
        <Route path="/cart/:id?"><CartScreen /></Route>
        <Route path="/login"><LoginScreen /></Route>
        <Route path="/register"><UserRegister /></Route>
        <Route path="/profile"><ProfileScreen /></Route>
        <Route path="/shipping"><ShippingScreen /></Route>
        </Switch>
      </Container>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
