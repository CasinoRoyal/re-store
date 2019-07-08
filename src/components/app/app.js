import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from '../spinner';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return(
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/cart' component={CartPage} />
    </Switch>
  );
};

export default App;