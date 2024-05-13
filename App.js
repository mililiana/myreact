
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { LoginSingup } from './Pages/LoginSingup';
import { Footer } from './Components/Footer/Footer';
import { ShopCategory } from './Pages/ShopCategory';
import men_banner from './Components/Assets/Screenshot 2024-05-10 at 10.33.33.png';
import women_banner from './Components/Assets/Screenshot 2024-05-10 at 10.33.51.png'
import Cart from './Pages/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory  banner={women_banner} category="women"/>}/>
        <Route path="/product" element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
