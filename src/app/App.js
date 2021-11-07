import React, {useEffect} from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "assets/vendors/style";
import cyanTheme from "../styles/themes/cyanTheme";
import Login from "./routes/Login";
import Register from "./routes/Register";
import {setInitUrl} from "../actions/Auth";
import AdminRoutes from 'app/routes';
import { getUser } from "actions";
import { ToastContainer } from 'react-toastify';


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
  const {token, initURL} = useSelector(({auth}) => auth);
  const {match, location} = props;

  useEffect(() => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (initURL === '') {
      dispatch(setInitUrl(props.history.location.pathname));
    }
  }, [dispatch, initURL, props.history.location.pathname]);

  useEffect(()=>{
    if(token){
      dispatch(getUser(token))
    }
  },[token, dispatch])


  let applyTheme = createMuiTheme(cyanTheme);
  
  if (location.pathname === '/') {
    if (token === null) {
      return (<Redirect to={'/login'}/>);
    } else if (initURL === '' || initURL === '/' || initURL === '/login') {
      return (<Redirect to={'/app/home'}/>);
    } else {
      return (<Redirect to={initURL}/>);
    }
  }

  return (
    <ThemeProvider theme={applyTheme}>
      <div className="flex-grow-1">
        <Switch>
          <RestrictedRoute path={`${match.url}app`} token={token} component={AdminRoutes}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </div>
      <ToastContainer theme="dark"/>
    </ThemeProvider>
  );
};


export default App;
