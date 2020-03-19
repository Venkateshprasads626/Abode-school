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
import Multipleintelligence from './Screens/Abodelife/Multipleintelligence'
import Higherintelligence from './Screens/Abodelife/Higherintelligence'
import Bookbag from './Screens/Abodelife/Bookbag'
import contact from './components/contact'
import Admissions from './Screens/Admissions';

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

          <Route path="/School/Toddler" component={Toddler} />
          <Route path="/School/Preschool" component={Preschool} />
          <Route path="/School/Elementary" component={Elementary} />

          <Route path="/Abodelife/Multipleintelligence" component={Multipleintelligence} />
          <Route path="/Abodelife/Higherintelligence" component={Higherintelligence} />
          <Route path="/Abodelife/Bookbag" component={Bookbag} />

          <Route path="/Admissions" component={Admissions} />

        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
