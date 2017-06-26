import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import moment from 'moment';

import Main from 'Main';
import TodoApp from 'TodoApp';
import About from 'About';


// moment.locale(window.navigator.language);
$(document).ready(() => $(document).foundation());

import './styles/app.scss';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={TodoApp}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
