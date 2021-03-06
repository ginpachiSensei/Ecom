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
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Container className="py-3">
        {/* <HomeScreen /> */}
        <Switch>
        <Route path="/" exact><HomeScreen /></Route>
        <Route path="/search/:keyword" exact><HomeScreen/></Route>
        <Route path='/page/:pageNumber' exact><HomeScreen/></Route>
        <Route path='/search/:keyword/page/:pageNumber' exact><HomeScreen/></Route>
        <Route path="/product/:id"><ProductScreen /></Route>
        <Route path="/cart/:id?"><CartScreen /></Route>
        <Route path="/login"><LoginScreen /></Route>
        <Route path="/register"><UserRegister /></Route>
        <Route path="/profile"><ProfileScreen /></Route>
        <Route path="/shipping"><ShippingScreen /></Route>
        <Route path="/payment"><PaymentScreen /></Route>
        <Route path="/placeOrder"><PlaceOrderScreen /></Route>
        <Route path="/Order/:id"><OrderScreen /></Route>
        <Route path="/admin/userlist"><UserListScreen /></Route>
        <Route path="/admin/user/:id/edit"><UserEditScreen /></Route>
        <Route path='/admin/productlist' exact><ProductListScreen/></Route>
        <Route path="/admin/productlist/:pageNumber" exact><ProductListScreen/></Route>
        <Route path="/admin/product/:id/edit"><ProductEditScreen /></Route>
        <Route path="/admin/orderList"><OrderListScreen /></Route>
        </Switch>
      </Container>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
