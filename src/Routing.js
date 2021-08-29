import React from "react";
import './styles/main.css';
import './styles/animation.css'
import './styles/responsive.css'
import HomeMain from "./home/HomeMain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./info/About";


function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default Routing;