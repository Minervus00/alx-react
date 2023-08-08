import React, {useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 900px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    const handleScreenChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addListener(handleScreenChange);

    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  });

  return (
    <div>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input className={css(styles.inputStyle)} type='text' id='email'></input>
      {isSmallScreen && <br/>}
      <label htmlFor="password">Password:</label>
      <input className={css(styles.inputStyle)} type='text' id='password'></input>
      {isSmallScreen && <br/>}
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
