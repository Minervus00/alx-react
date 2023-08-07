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
import "./App.css";
import '../Header/Header.css';
import '../Footer/Footer.css';
import '../Login/Login.css';

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
          <Notifications listNotifications={this.listNotifications} />
        </div>

        <div className='App'>
          <div className='App-header'>
            <Header />
          </div>

          <div className="App-body">
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
              <p>Keep Doing Hard Things ;)</p>
            </BodySection>
          </div>

          <div className="App-footer">
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
