import React from 'react';
import './scss/App.scss';
import './scss/App-mobile.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home'
import Scenes from './pages/Scenes'
import Sounds from './pages/Sounds'
import Words from './pages/Words'
import Brackets from './pages/Brackets'
import About from './pages/About'
import INMR from './pages/INMR_Congress'

// Components
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"><About /></Route>
          <Route path="/scenes"><Scenes/></Route>
          <Route path="/sounds"><Sounds/></Route>
          <Route path="/words"><Words/></Route>
          <Route path="/brackets/inmr"><INMR /></Route>
          <Route path="/brackets"><Brackets/></Route>
          <Route path="/About"><Home/></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
