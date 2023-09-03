import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from "../assets/holberton-logo.jpg";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

export class Header extends React.Component {

  render() {
    return (
      <>
        <div className={css(styles.header)}>
          <img className={css(styles.img)} src={logo} alt='logo' />
          <h1>School dashboard</h1>
        </div>
        {this.props.user &&
          <p id='logoutSection'>Welcome {this.props.user.email} (<a href='#' onClick={this.props.logout}>logout</a>)</p>
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

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
