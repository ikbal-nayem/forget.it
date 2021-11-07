import React, {useEffect} from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "assets/vendors/style";
import cyanTheme from "../styles/themes/cyanTheme";
import Login from "./routes/Login";
import Register from "./routes/Register";
import AdminRoutes from 'app/routes';
import { getUser } from "actions";
import { ToastContainer } from 'react-toastify';
import asyncComponent from "util/asyncComponent";


const RestrictedRoute = ({component: Component, token, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      token
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />}
  />;

const App = (props) => {
  const dispatch = useDispatch();
  const {token} = useSelector(({auth}) => auth);
  const {match} = props;

  useEffect(()=>{
    if(token){
      dispatch(getUser(token))
    }
  },[token, dispatch])


  let applyTheme = createMuiTheme(cyanTheme);

  return (
    <ThemeProvider theme={applyTheme}>
      <div className="flex-grow-1">
        <Switch>
          <Redirect exact from="/" to="/app/home"/>
          <RestrictedRoute path={`${match.url}app`} token={token} component={AdminRoutes}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route component={asyncComponent(() => import('app/routes/Errors/404'))}/>
        </Switch>
      </div>
      <ToastContainer theme="dark"/>
    </ThemeProvider>
  );
};


export default App;
