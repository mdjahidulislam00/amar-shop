import './App.css';
import{Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import LogIn from './Pages/LogIn/LogIn';
import CartPage from './Pages/CartPage/CartPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import NoMatch from './Pages/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path='/shop' element={ <Shop /> } />
            <Route path="/products/:id" element={ <ProductDetails /> } />
            <Route path='/cartPage' element={ <CartPage /> } />
            <Route path='/logInPage' element={ <LogIn /> } />
            <Route path='*' element={ <NoMatch /> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
