import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Traps from './components/Traps.js';
import Delts from './components/Delts.js';
import Lats from './components/Lats.js';
import Biceps from './components/Biceps.js';
import Triceps from './components/Triceps.js';
import Pecs from './components/Pecs.js';
import Abs from './components/Abs.js';
import Forearms from './components/Forearms.js';
import Glutes from './components/Glutes.js';
import Hamstrings from './components/Hamstrings.js';
import Quads from './components/Quads.js';
import Calves from './components/Calves.js';
import Adductors from './components/Adductors.js';
import Abductors from './components/Abductors.js';
import Cardio from './components/Cardio.js';
import Footer from './components/Footer.js';

export default class App extends Component {
  render() {
    return(
      <Router>
        <Nav />
          <Switch />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/traps">
              <Traps />
            </Route>
            <Route exact path="/delts">
              <Delts />
            </Route>
            <Route exact path="/lats">
              <Lats />
            </Route>
            <Route exact path="/biceps">
              <Biceps />
            </Route>
            <Route exact path="/triceps">
              <Triceps />
            </Route>
            <Route exact path="/pecs">
              <Pecs />
            </Route>
            <Route exact path="/abs">
              <Abs />
            </Route>
            <Route exact path="/forearms">
              <Forearms />
            </Route>
            <Route exact path="/glutes">
              <Glutes />
            </Route>
            <Route exact path="/hamstrings">
              <Hamstrings />
            </Route>
            <Route exact path="/adductors">
              <Adductors />
            </Route>
            <Route exact path="/abductors">
              <Abductors />
            </Route>
            <Route exact path="/quads">
              <Quads />
            </Route>
            <Route exact path="/calves">
              <Calves />
            </Route>
            <Route exact path="/cardio">
              <Cardio />
            </Route>
        <Footer />
      </Router>
    );
  }
}