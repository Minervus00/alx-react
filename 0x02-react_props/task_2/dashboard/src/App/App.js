import React from "react";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import "./App.css";
import '../Header/Header.css';
import '../Footer/Footer.css';
import '../Login/Login.css';

function App() {
  return (
    <>
      <div id="root-notifications">
        <Notifications />
      </div>

      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>

        <div className="App-body">
          <Login />
        </div>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
