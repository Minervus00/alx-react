import React from "react";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NotificationsContainer from '../Notifications/NotificationsContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from 'aphrodite';
import { user } from "./AppContext";
import {
  displayNotificationDrawer, hideNotificationDrawer, loginRequest,
  logout
} from "../actions/uiActionCreators";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];

    this.onKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'h'){
        alert('Logging you out');
        this.props.logout();
      }
    };
    this.state = {
      user: user,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown, true)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown, true)
  }

  render() {
    return (
      <>
        <div id="root-notifications">
          <NotificationsContainer
            displayDrawer={this.props.displayDrawer}
            handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer}
          />
        </div>

        <div className={css(styles.appStyle)}>
          <Header />

          <div className={css(styles.bodyStyle)}>
            {this.props.isLoggedIn ? 
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            :
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.props.login}/>
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </BodySection>
          </div>

          <div className={css(styles.footerStyle)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appStyle: {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    fontWeight: 'bold',
    margin: '0px',
    minHeight: '100vh',
    fontSize: '18px'
  },
  bodyStyle: {
    flexGrow: '4',
    marginTop: '40px',
    marginLeft: '60px',
    /* font-weight: bold, */
  },
  footerStyle: {
    flexShrink: '0',
    borderTop: '5px solid rgb(221, 56, 84)',
    textAlign: 'center',
    fontStyle: 'italic',
  }
});

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
