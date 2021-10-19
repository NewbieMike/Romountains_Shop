import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/global.scss';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          
          {/* <Route exact path='/product/:id' component={Product} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/order' component={Order} />
          <Route path='*' component={NotFound} /> */}
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
