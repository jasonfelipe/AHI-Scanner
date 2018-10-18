import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";


import API from "./utils/API";

const App = () => (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/search' component={Search} />
            <Route path='/profile' component={Login} />
          </Switch>
        </div>
      </Router>
)



export default App;
