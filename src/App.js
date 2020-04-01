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
import SampDnD from './pages/03-Definition/samp-dnd';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

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
            <DndProvider backend={Backend}>
              <Route exact path="/SampDnD" component={SampDnD}/>
            </DndProvider>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
