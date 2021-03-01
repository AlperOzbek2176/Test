import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from'./components/Register';
import Table from './components/Table';
import Textedit from './components/Textedit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class RouteApp extends Component {
  
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
              </Route>
              <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
              </Route>
              <Route path="/Table">
              <Table />
              </Route>
              <Route path="/Textedit">
              <Textedit />
              </Route>
            </Switch>
        </Router>
      );
    }
  }

ReactDOM.render(<RouteApp />, document.getElementById('root'));
export default RouteApp;








