import React from 'react';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <h1>Whacked Workout</h1>
      <h3>Favorite exercises that target the right areas and that bring the burn</h3>
      <Traps />
      <Delts />
      <Lats />
      <Biceps />
      <Triceps />
      <Pecs />
      <Abs />
      <Forearms />
      <Glutes />
      <Hamstrings />
      <Quads />
      <Calves />
      <Adductors />
      <Abductors />
      <Cardio />
    </div>
  );
}

export default App;