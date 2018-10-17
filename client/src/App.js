import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => (
  <Router>
    <div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>


        <Route exact path='/' component={Login} />
        <Route path='/search' component={Search} />
        <Route path='/profile' component={Profile}/>
    </div>
  </Router>
  
)


export default withRouter(App);
