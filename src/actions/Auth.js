import {
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../constants/ActionTypes";
import axios from 'util/Api'
import { toast } from 'react-toastify';
import statusCode from '../util/status-codes'


export const setInitUrl = (url) => {
  return {type: INIT_URL, payload: url};
};

export const userSignIn = ({email, password, setLoading}) => {
  return (dispatch) => {
    setLoading(true)
    axios.post('/api/user/login', {
        email: email,
        password: password,
      }
    ).then(({data}) => {
      if (data.success) {
        localStorage.setItem("token", JSON.stringify(data.token));
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
        dispatch({type: USER_TOKEN_SET, payload: data.token});
        toast.success("Login successful!")
      }
    }).catch((error)=>{
      try{
        error.response.status === 401
          ? toast.error("Invalid email or password", {position: "top-center"})
          : toast.error(statusCode[error.response.status], {position: "top-center"})
      } catch {
        toast.error(error.message)
        console.log(error)
      }
    }).finally(()=>setLoading(false))
  }
};

export const getUser = (token) => {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
  return (dispatch) => {
    axios.get('/api/user/user-info',
    ).then(({data}) => {
      if (data.success) {
        dispatch({type: USER_DATA, payload: data.user});
      }
    }).catch(function (error) {
      console.log(error.message);
      userSignOut()(dispatch)
      toast.error('Please login again!')
    });
  }
};


export const userSignOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({type: SIGNOUT_USER_SUCCESS});
  }
};
