import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
import Create from './Components/create';
import Edit from './Components/edit';
import Index from './Components/index';
import Home from './Components/home/home'
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
          <Link to={'/'} className="navbar-brand">React Example</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
            </ul>
            </div>
        </nav>
      
          <Switch>
          <Route exact path='/' component={Home} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/edit:id' component={Edit} />
            <Route exact path='/index' component={Index} />
          </Switch>
          </div>
          <Footer/>
      </Router>

    );
  }
}
export default App;
