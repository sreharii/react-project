import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';
import Home from './components/userlist/userlist.component';
import Country from './components/countrylist/countrylist.component';
import PlayerList from './components/playerlist/playerlist';
import companyimg from './img.png'; 


class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          
        <div className="auth-wrapper">
            
          <div className="auth-inner">
          <img className="left-img"  src={companyimg} alt='Company' height="100%"></img>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
              <Route path="/country" component={Country} />
              <Route path="/player" component={PlayerList} />
            </Switch>
          </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
