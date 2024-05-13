import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import shop from '../Assets/shopping-bag.png'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext);
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <p>DoberSh</p>
      </div>
      <ul className="nav-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link></li>
        <li className={menu === "shop" ? "active" : ""} onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none'}} to='/men'>Men</Link></li>
        <li className={menu === "contact" ? "active" : ""} onClick={() => { setMenu("contact") }}><Link style={{ textDecoration: 'none'}} to='/women'>Women</Link></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={shop} alt="" className="fixed-size-image" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>
    </div>
  )
}

export default Navbar;
