import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Relationships from "./components/Relationships";
import Requirements from "./components/Requirements";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Navbar />
          <Route exact path='/' component={Main} />
          <div className='container'>
            <Route path='/relationships' component={Relationships} />
            <Route path='/aboutMe' component={AboutMe} />
            <Route path='/requirements' component={Requirements} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/users' component={Users} />
          </div>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
