import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Auth from './Auth';
import Search from './Search';


// eslint-disable-next-line
export default (history) => combineReducers({
  router: connectRouter(history),
  auth: Auth,
  search: Search
});
