import React from 'react';
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import configureStore, {history} from './store';
import App from './app/App';

export const store = configureStore();


const MainApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>

export default MainApp;