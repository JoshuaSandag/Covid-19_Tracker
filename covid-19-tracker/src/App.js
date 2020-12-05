import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Home, Global, Indonesia, Provinsi} from './pages'

const background = {
 backgroundColor:'grey'
}
function App (){
  return (  
    <header style = {background}>
    <Router>
      <div>
      <h1>Covid Tracker</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/global">Global</Link> 
            </li>
           <li>
              <Link to="/indonesia">Indonesia</Link>
           </li>
           <li>
              <Link to="/provinsi">Per Provinsi</Link>
           </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Global">
            <Global />
          </Route>
          <Route path="/indonesia">
            <Indonesia />
          </Route>
          <Route path="/provinsi">
            <Provinsi />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </header>
  );
};


export default App;
