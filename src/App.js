import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import LogIn from './Pages/LogIn/LogIn';
import CartPage from './Pages/CartPage/CartPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import NoMatch from './Pages/NoMatch/NoMatch';
import OrderConfirmPage from './Pages/OrderConfirmPage/OrderConfirmPage';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const userLogInData = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <userLogInData.Provider value={[logInUser, setLogInUser]} >
      <Header />
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path='/home' element={ <Home /> } />
              <Route path='/shop' element={ <Shop /> } />
              <Route path="/products/:id" element={ <ProductDetails /> } />
              <Route path='/cartPage' element={ <CartPage /> } />
              <Route element={ <PrivateRoute />}>
                <Route path='/orderConfirmPage' element={ <OrderConfirmPage /> } />
              </Route>
              <Route path='/logInPage' element={ <LogIn /> } />
              <Route path='*' element={ <NoMatch /> } />
          </Routes>
      <Footer />
    </userLogInData.Provider>
  );
}

export default App;
