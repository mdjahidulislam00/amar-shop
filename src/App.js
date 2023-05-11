import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import SignUp from './Pages/SignUp/SignUp';
import CartPage from './Pages/CartPage/CartPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import NoMatch from './Pages/NoMatch/NoMatch';
import OrderConfirmPage from './Pages/OrderConfirmPage/OrderConfirmPage';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const currentUser = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});
  console.log(logInUser)
  return (
    <currentUser.Provider value={[logInUser, setLogInUser]} >
      <Header />
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path='/home' element={ <Home /> } />
              <Route path='/shop' element={ <Shop /> } />
              <Route path="/products/:id" element={ <ProductDetails /> } />
              <Route path='/cartPage' element={ <CartPage /> } />
              <Route path='/OrderConfirmPage' 
                      element={
                        <OrderConfirmPage />
                      
                      }/>
              <Route path='/signUpPage' element={ <SignUp /> } />
              <Route path='*' element={ <NoMatch /> } />
          </Routes>
      <Footer />
    </currentUser.Provider>
  );
}

export default App;
