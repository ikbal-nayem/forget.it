import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
import Header from 'components/Header';


const Routes = ({match}) =>(
  <React.Fragment>
    <Header/>
    <Switch>
      <Route path={`${match.url}/home`} component={asyncComponent(() => import('./Home'))}/>
      <Route path={`${match.url}/settings`} component={asyncComponent(() => import('./Settings'))}/>
    </Switch>
  </React.Fragment>
)


export default withRouter(Routes);

