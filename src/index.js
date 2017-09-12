import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import './index.css';

import Header from './component/Header';
import Home from './component/Home';
import My from './component/My';
import Add from './component/Add';
import Summary from './component/Summary';
import Edit from './component/Edit';
import Login from './component/Login';

ReactDOM.render(
(<div>
  <Header />
  <Router >
    <Switch>
      <Route path="/summary" component={Summary} />
      <Route path="/my" component={My} />
      <Route path="/add" component={Add} />
      <Route path="/edit/:item" component={Edit}/>      
      <Route path="/login" component={Login}/>      
      <Route path="/" component={Home} />
    </Switch>
  </Router>
</div>), document.getElementById('root'));
registerServiceWorker();
