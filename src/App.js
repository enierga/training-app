import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/01-Home/home'
import Policy from './pages/02-Start/1-Policy';
import Purpose from './pages/02-Start/2-Purpose';
import Solids from './pages/03-Types/1-Solids'
import Liquids from './pages/03-Types/2-Liquids'
import Sharps from './pages/03-Types/3-Sharps'
import Path from './pages/03-Types/4-Pathological'

import Definition from './pages/03-Types/definition';
import SampMC from './pages/03-Types/def-assessment';

import SampDnD from './pages/03-Types/samp-dnd';
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
            {/*01-Home*/}
            <Route exact path="/" component={Home} />
            {/*02-Start*/}
            <Route exact path="/Policy" component={Policy} />
            <Route exact path="/Purpose" component={Purpose} />
            <Route exact path="/" component={Home} />
            {/*03-Types*/}
            <Route exact path="/Solids" component={Solids} />
            <Route exact path="/Liquids" component={Liquids} />
            <Route exact path="/Sharps" component={Sharps} />
            <Route exact path="/Path" component={Path} />


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
