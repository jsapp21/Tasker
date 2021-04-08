import { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import UserContainer from "./components/UserContainer";
import './App.css'
import Signup from "./components/Signup";

class App extends Component {

  render() {

    return (
      <div className="ui container">
        <Switch>
          <Route path="/notes" component={UserContainer} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
        </Switch>
       
      </div>
    );
  }
}

export default App;