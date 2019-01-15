import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from 'react-router-dom';
import Footer from './components/footer';
import history from './components/history';
import NavBar from './components/navbar';
import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <React.Fragment>
            <CssBaseline/>
            <NavBar/>
            <Routes/>
            <Footer/>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
