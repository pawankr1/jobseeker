import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Jobseeker from './component/Jobseeker';
import CompanyDetails from './component/CompanyDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(props)=> <Jobseeker {...props}/>} />
          <Route path="/company/:name" exact render={(props)=> <CompanyDetails {...props}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
