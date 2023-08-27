import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from "../assets/holberton-logo.jpg";
import { AppContext } from '../App/AppContext';

export default class Header extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <>
        <div className={css(styles.header)}>
          <img className={css(styles.img)} src={logo} alt='logo' />
          <h1>School dashboard</h1>
        </div>
        {this.context.user.isLoggedIn &&
          <p id='logoutSection'>Welcome {this.context.user.email} (<a href='#' onClick={this.context.logOut}>logout</a>)</p>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    /* font-weight: bold, */
    fontSize: '25px',
    borderBottom: '5px solid rgb(221, 56, 84)',
    color: 'rgb(221, 56, 84)' 
  },

  img: {
    width: '240px',
	  height: '230px'
  }
});
