import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/01-Home/home'
import Policy from './pages/02-Start/1-Policy';
import Purpose from './pages/02-Start/2-Purpose';
import Solids from './pages/03-Types/1-Solids'
import Liquids from './pages/03-Types/2-Liquids'
import Sharps from './pages/03-Types/3-Sharps'
import Path from './pages/03-Types/4-Pathological'

import DisposalStart from './pages/05-Disposal/Start'
import ProcessA from './pages/05-Disposal/1A-Process'
import ProcessB from './pages/05-Disposal/1B-Process'
import DisUnacc from './pages/05-Disposal/2-Unacceptable'
import AutocA from './pages/05-Disposal/3A-Autoclaving'
import AutocB from './pages/05-Disposal/3B-Autoclaving'
import Droso from './pages/05-Disposal/4-Drosophilia'
import Carc from './pages/05-Disposal/5-Carcasses'
import DPolicy from './pages/05-Disposal/6-Policy'
import Injury from './pages/05-Disposal/7-Injury'



import Definition from './pages/03-Types/definition';
import SampMC from './pages/03-Types/def-assessment';

import SortingSampDnD from './pages/03-Types/samp-dnd';
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

            {/*05-Disposal*/}
            <Route exact path="/DisposalStart" component={DisposalStart} />
            <Route exact path="/ProcessA" component={ProcessA} />
            <Route exact path="/ProcessB" component={ProcessB} />
            <Route exact path="/DisUnacc" component={DisUnacc} />
            <Route exact path="/AutocA" component={AutocA} />
            <Route exact path="/AutocB" component={AutocB} />
            <Route exact path="/Droso" component={Droso} />
            <Route exact path="/Carc" component={Carc} />
            <Route exact path="/DPolicy" component={DPolicy} />
            <Route exact path="/Injury" component={Injury} />


            <Route exact path="/Def" component={Definition} />
            <Route exact path="/SampMC" component={SampMC} />
            <DndProvider backend={Backend}>
              <Route exact path="/SortingSampDnD" component={SortingSampDnD}/>
            </DndProvider>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
