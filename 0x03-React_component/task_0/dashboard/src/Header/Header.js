import Reat from 'react';
import logo from "../assets/holberton-logo.jpg";


function Header() {
  return (
    <>
      <img src={logo} alt='logo' />
      <h1>School dashboard</h1>
    </>
  );
}

export default Header;
