import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Parks from './Parks'
import Park from './Old Files/Park';
import ParksList from './ParksList';
import ParkDetails from './ParkDetails';
import ActivitiesList from './ActivitiesList';
import ActivityListDetails from './Old Files/ActivityListDetails';
import ActivityDetails from './Old Files/ActivityDetails';
import Activity from './Activity';
import Webcams from './Webcams';
import SelectWebcams from './SelectWebcams';



function App() {
    return (
      <Router basename="/">
          <div className="App">
            <Navbar />
              <div className="content">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/ParksList">
                    <ParksList />
                  </Route>
                  <Route exact path="/ActivitiesList">
                    <ActivitiesList />
                  </Route>
                  <Route path="/Activities/:id">
                    <Activity />
                  </Route>
                  <Route path="/Webcams">
                    <SelectWebcams />
                  </Route>
                  <Route path="/Parks/:parkCode">
                    <ParkDetails />
                  </Route>  
                </Switch>
              </div>
              <div>
            </div>
        </div>
      </Router>
      
    );
 
}

export default App;
