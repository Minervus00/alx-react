import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: false,
      email:'', password: '', enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidMount() {
    // Add an event listener to window resize
    window.addEventListener('resize', this.checkScreenSize);
    // Initial check
    this.checkScreenSize();
  }

  componentDidUpdate() {
    this.checkScreenSize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  }

  checkScreenSize = () => {
    const smallScreen = window.innerWidth <= 900;
    if (this.state.isSmallScreen !== smallScreen) {
      this.setState({isSmallScreen: smallScreen});
    }
  }

  handleLoginSubmit(event) {
    this.props.logIn(this.state.email, this.state.password);
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
    if (this.state.email.length && this.state.password.length) {
      this.setState({enableSubmit: true});
    } else if ((!this.state.email.length || !this.state.password.length ) && this.state.enableSubmit) {
      this.setState({enableSubmit: false});
    }
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
    if (this.state.email.length && this.state.password.length){
      this.setState({enableSubmit: true});
    } else if (this.state.enableSubmit) {
      this.setState({enableSubmit: false});
    }
  }

  render() {
    return (
      <div>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">
            Email:
            <input
              className={css(styles.inputStyle)}
              type='text' id='email' value={this.state.email} 
              onChange={this.handleChangeEmail}
            />
          </label>
          {this.state.isSmallScreen && <br/>}
          <label htmlFor="password">
            Password:
            <input
              className={css(styles.inputStyle)}
              type='text' id='password' value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </label>
          {this.state.isSmallScreen && <br/>}
          <input
            type='submit' value='Submit' disabled={this.state.enableSubmit === false}
            onClick={this.handleLoginSubmit}
          />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    margin: 'auto 10px',
  },
});

Login.defaultProps = {
  logIn: () => {alert('Missing logIn function')},
};

Login.propTypes = {
  logIn: PropTypes.func,
};
