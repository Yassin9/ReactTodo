import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Example from 'Example';
import TodoApp from 'TodoApp';

$(document).ready(() => $(document).foundation());

import './styles/app.scss';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={TodoApp}/>
        <Route path="example" component={Example}/>
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
