import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
    
  return (
    <header className="header">
      <div className="logo">
        <h1><Link to="/">Francify</Link></h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
          {!user ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><button onClick={logout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
