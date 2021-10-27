import { SEARCH_QUERY } from "constants/ActionTypes";

const INIT_STATE = {
  query: null
};

// eslint-disable-next-line
export default (state = INIT_STATE, action) => {
  if(action.type === SEARCH_QUERY)
    return {query: action.payload}
  return state
}
