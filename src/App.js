import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/01-Home/home'
import Start from './pages/02-Start/start';
import Definition from './pages/03-Definition/definition';
import SampMC from './pages/03-Definition/def-assessment';


class App extends Component {
  render() {
    return (

      /*
      * I think we should route different pages here and other pages
      * can be added/routed as theyre created.
      *  - Vincent <3
      */


      <div className='App' >
        <Router>
          {/* this is how itll know what page to render */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Start" component={Start} />
            <Route exact path="/Def" component={Definition} />
            <Route exact path="/SampMC" component={SampMC} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
