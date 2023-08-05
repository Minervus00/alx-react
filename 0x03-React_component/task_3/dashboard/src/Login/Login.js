import React from 'react';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type='text' id='email'></input>
      <label htmlFor="password">Password:</label>
      <input type='text' id='password'></input>
      <button>OK</button>
    </>
  );
}

export default Login;
