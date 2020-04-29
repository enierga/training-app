import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/01-Home/home'
import Policy from './pages/02-Start/1-Policy';
import Purpose from './pages/02-Start/2-Purpose';

import Solids from './pages/03-Types/1-Solids'
import Liquids from './pages/03-Types/2-Liquids'
import Sharps from './pages/03-Types/3-Sharps'
import Path from './pages/03-Types/4-Pathological'
import Mixed from './pages/03-Types/5-Mixed'
import TypesQ1 from './pages/03-Types/6-Q1'
import TypesQ2 from './pages/03-Types/7-Q2'

import Primary from './pages/04-Collection/1-Solids/1-Primary'
import Secondary from './pages/04-Collection/1-Solids/2-Secondary'
import SolidsUnacc from './pages/04-Collection/1-Solids/3-Unacceptable'
import TipsA from './pages/04-Collection/2-Pipettes/1A-Tips'
import TipsB from './pages/04-Collection/2-Pipettes/1B-Tips'
import PlasticA from './pages/04-Collection/2-Pipettes/2A-Plastic'
import PlasticB from './pages/04-Collection/2-Pipettes/2B-Plastic'
import LiqGen from './pages/04-Collection/3-Liquids/1-General'
import Flask from './pages/04-Collection/3-Liquids/2-Flask'
import LiqUnacc from './pages/04-Collection/3-Liquids/3-Unacceptable'
import SharpsGen from './pages/04-Collection/4-Sharps/1-General'
import Contam from './pages/04-Collection/4-Sharps/2-Contaminated'
import SharpsUnacc from './pages/04-Collection/4-Sharps/3-Unacceptable'
import CollectionQ1 from './pages/04-Collection/5-Q1'
import CollectionQ2 from './pages/04-Collection/6-Q2'
import CollectionQ3 from './pages/04-Collection/7-Q3'
import CollectionQ4 from './pages/04-Collection/8-Q4'
import CollectionQ5 from './pages/04-Collection/9-Q5'

import ProcessA from './pages/05-Disposal/1A-Process'
import ProcessB from './pages/05-Disposal/1B-Process'
import DisUnacc from './pages/05-Disposal/2-Unacceptable'
import AutocA from './pages/05-Disposal/3A-Autoclaving'
import AutocB from './pages/05-Disposal/3B-Autoclaving'
import Droso from './pages/05-Disposal/4-Drosophilia'
import Carc from './pages/05-Disposal/5-Carcasses'
import Injury from './pages/05-Disposal/6-Injury'
import BrokenGlassDnD from './pages/05-Disposal/DnD1-BrokenGlass';
import PasteurPipettesDnD from './pages/05-Disposal/DnD2-PasteurPipettes';
import BloodTubeDnD from './pages/05-Disposal/DnD3-BloodTube';
import PPEDnD from './pages/05-Disposal/DnD4-PPE';
import PipTipsDnD from './pages/05-Disposal/DnD5-PipTips';
import PlatesDnD from './pages/05-Disposal/DnD6-Plates';
import TubesDnD from './pages/05-Disposal/DnD7-Tubes';
import FlasksDnD from './pages/05-Disposal/DnD8-Flasks';
import SerolDnD from './pages/05-Disposal/DnD9-Serological'
import WrapDnD from './pages/05-Disposal/DnD10-Wrappers'
import NeedleDnD from './pages/05-Disposal/DnD11-Needles'
import SortingSampDnD from './pages/05-Disposal/samp-dnd';

import DPolicy from './pages/End/Policy'
import End from './pages/End/End'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

class App extends Component {

  /* Super Experimental Audio Implementation */

  // componentDidMount() {
  //   this.audio = new Audio("./Audio/default.mp3");
  //   this.audio.load();
  //   this.playAudio();
  // }

  // playAudio() {
  //   const audioPromise = this.audio.play();
  //   if(audioPromise !== undefined) {
  //     audioPromise.then(_ => {
  //       // autoplay audio
  //     }).catch(err => {
  //       // some error is thrown idk why it would tho
  //       console.log(err);
  //     });
  //   }
  // }

  render() {
    return (

      <div className='App' >
        <Router>
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
            <Route exact path="/Mixed" component={Mixed} />
            <Route exact path="/TypesQ1" component={TypesQ1} />
            <Route exact path="/TypesQ2" component={TypesQ2} />
            {/* 04-Collection */}
            <Route exact path="/Primary" component={Primary} />
            <Route exact path="/Secondary" component={Secondary} />
            <Route exact path="/SolidsUnacc" component={SolidsUnacc} />
            <Route exact path="/TipsA" component={TipsA} />
            <Route exact path="/TipsB" component={TipsB} />
            <Route exact path="/PlasticA" component={PlasticA} />
            <Route exact path="/PlasticB" component={PlasticB} />
            <Route exact path="/LiqGen" component={LiqGen} />
            <Route exact path="/Flask" component={Flask} />
            <Route exact path="/LiqUnacc" component={LiqUnacc} />
            <Route exact path="/SharpsGen" component={SharpsGen} />
            <Route exact path="/Contam" component={Contam} />
            <Route exact path="/SharpsUnacc" component={SharpsUnacc} />
            <Route exact path="/CollectionQ1" component={CollectionQ1} />
            <Route exact path="/CollectionQ2" component={CollectionQ2} />
            <Route exact path="/CollectionQ3" component={CollectionQ3} />
            <Route exact path="/CollectionQ4" component={CollectionQ4} />
            <Route exact path="/CollectionQ5" component={CollectionQ5} />

            {/* End */}
            <Route exact path="/DPolicy" component={DPolicy} />
            <Route exact path="/End" component={End} />

            {/*05-Disposal*/}
            <Route exact path="/ProcessA" component={ProcessA} />
            <Route exact path="/ProcessB" component={ProcessB} />
            <Route exact path="/DisUnacc" component={DisUnacc} />
            <Route exact path="/AutocA" component={AutocA} />
            <Route exact path="/AutocB" component={AutocB} />
            <Route exact path="/Droso" component={Droso} />
            <Route exact path="/Carc" component={Carc} />
            <Route exact path="/Injury" component={Injury} />
            <DndProvider backend={Backend}>
              <Route exact path="/DnD1" component={BrokenGlassDnD} />
              <Route exact path="/DnD2" component={PasteurPipettesDnD} />
              <Route exact path="/DnD3" component={BloodTubeDnD} />
              <Route exact path="/DnD4" component={PPEDnD} />
              <Route exact path="/DnD5" component={PipTipsDnD} />
              <Route exact path="/DnD6" component={PlatesDnD} />
              <Route exact path="/DnD7" component={TubesDnD} />
              <Route exact path="/DnD8" component={FlasksDnD} />
              <Route exact path="/DnD9" component={SerolDnD} />
              <Route exact path="/DnD10" component={WrapDnD} />
              <Route exact path="/DnD11" component={NeedleDnD} />
              <Route exact path="/SortingSampDnD" component={SortingSampDnD} />
            </DndProvider>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
