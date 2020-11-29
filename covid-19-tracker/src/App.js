import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Global, Home, Indonesia, Provinsi } from "./pages";


//Membuat Routings menggunakan Package react-router-dom
const App = () => {
  return (
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
          <Route path="/global">
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
  );
};

export default App;
