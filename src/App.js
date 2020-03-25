import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start';


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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
