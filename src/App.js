import React from 'react';
import Index from './components/Index'
import Registros from './components/Registros/Registros'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
      
    <Route path="/Registros">
          <Registros />
          </Route>
          <Route path="/">
          <Index />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
