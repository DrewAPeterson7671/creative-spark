import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Creative Spark Blog</h1>
      <Link to="/">Home</Link> | <Link to="/articlelist">Articles</Link> | <Link to="/productions">Productions</Link> | <Link to="/admin">Admin</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Header;
