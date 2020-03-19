import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Screens/Home';
import Story from './Screens/About/Story'
import campus from './Screens/About/campus'
import Founder from './Screens/About/People/Founder';
import Toddler from './Screens/School/Toddler'
import Preschool from './Screens/School/Preschool'
import Elementary from './Screens/School/Elementary'
import contact from './components/contact'
import Admissions from './Screens/Admissions';

import Multipleintelligence from './Screens/Ourphilosophy/Multipleintelligence'
import Higherintelligence from './Screens/Ourphilosophy/Higherintelligence'
import Montessori from './Screens/Ourphilosophy/Montessori'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={contact} />
          <Route path="/About/Story" component={Story} />
          <Route path="/About/campus" component={campus} />
          <Route path="/About/People/Founder" component={Founder} />

          <Route path="/Ourphilosophy/Multipleintelligence" component={Multipleintelligence} />
          <Route path="/Ourphilosophy/Higherintelligence" component={Higherintelligence} />
          <Route path="/Ourphilosophy/Montessori" component={Montessori} />

          <Route path="/School/Toddler" component={Toddler} />
          <Route path="/School/Preschool" component={Preschool} />
          <Route path="/School/Elementary" component={Elementary} />

     
          <Route path="/Admissions" component={Admissions} />

        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
