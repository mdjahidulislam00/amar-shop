import './App.css';
import{Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import LogIn from './Pages/LogIn/LogIn';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
          <Route path='/cartPage' element={ <CartPage /> } />
          <Route path='/logInPage' element={ <LogIn /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
