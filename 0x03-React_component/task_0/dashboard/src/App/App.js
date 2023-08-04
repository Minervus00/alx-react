import React from "react";
import PropTypes from "prop-types";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
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
            {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
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
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
