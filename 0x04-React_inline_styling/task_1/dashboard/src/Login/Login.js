import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div >
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input className={css(styles.inputStyle)} type='text' id='email'></input>
      <label htmlFor="password">Password:</label>
      <input className={css(styles.inputStyle)} type='text' id='password'></input>
      <button>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    margin: 'auto 10px',
  },
});

export default Login;
