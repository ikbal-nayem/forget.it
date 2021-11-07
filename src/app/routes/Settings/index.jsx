import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import asyncComponent from "util/asyncComponent";
import settingStyle from './style';


// eslint-disable-next-line
export default ({match, location}) => {
  const classes = settingStyle()
  const {authUser} = useSelector(({auth}) => auth)
  
  let path = location.pathname.split('/')
  path = path[path.length-1]


  return (
    <div className="container app-wrapper">
      <div className="p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-md-12">
            <div className="card border-none shadow-lg overflow-hidden">
              <div className="row mx-0">
                <div className="col-sm-4 bg-gradient px-2">
                  <div className="text-center text-white">
                    <div className="p-3">
                      <img src="https://img.icons8.com/bubbles/100/000000/user.png" alt="User-Profile"/>
                    </div>
                    <h2 className="text-white font-weight-bold">{authUser?.first_name} {authUser?.last_name}</h2>
                    <Link to="/app/settings/profile" className="text-decoration-none text-white">
                      <MenuItem className={path==='profile' && classes.active}>Profile</MenuItem>
                    </Link>
                    <Link to="/app/settings/security" className="text-decoration-none text-white">
                      <MenuItem className={path==='security' && classes.active}>Security</MenuItem>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-8">
                  <Switch>
                    <Redirect exact from={match.url} to={`${match.url}/profile`}/>
                    <Route path={`${match.url}/profile`} component={asyncComponent(() => import('../../../components/forms/Profile'))}/>
                    <Route path={`${match.url}/security`} component={asyncComponent(() => import('../../../components/forms/Security'))}/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}