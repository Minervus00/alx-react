import React from "react";
import PropTypes from "prop-types";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils.js";
import { StyleSheet, css } from 'aphrodite';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    this.listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
    ];

    this.onKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'h'){
        alert('Logging you out');
        this.props.logOut();
      }
    };
    this.state = {displayDrawer: false};
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown, true)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown, true)
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }
  
  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  render() {
    return (
      <>
        <div id="root-notifications">
          <Notifications
          listNotifications={this.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
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
                <Login />
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

App.defaultProps = {
  isLoggedIn: false,
  logOut: function() {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

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
