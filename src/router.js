import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import products from './routes/Products' ;
import taskList from './routes/TaskList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={products}/>
        <Route path="/taskList" exact component={taskList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
