import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Footer from "./components/Footer"
import "./pages/pages.css"

const App = () => (
  <Router>
    <div className="content-inside">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/search' component={Search} />
        <Route path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </div>
  </Router>

)


export default App;
