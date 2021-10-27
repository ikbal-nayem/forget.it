import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {userSignIn} from 'actions/Auth';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from 'react-hook-form';
import logo from '../../../assets/images/logo.svg'
import loginStyle from './style';



const SignIn = (props) => {
  const classes = loginStyle();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  });
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const token = useSelector(({auth}) => auth.token);

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  }, [token, props.history]);


  const onSubmit = (data)=>{
    dispatch(userSignIn({email: data.email, password: data.password, setLoading}))
  }


  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-gradient">
      <div className={`${classes.root} animated slideInUpTiny animation-duration-4`}>

        <div className="mb-3">
          <h1 className={`${classes.title} text-gradient`}>forget.it</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <Link to="/" title="cms">
            <img width={170} src={logo} alt="cms"/>
          </Link>
        </div>

        <div className="app-login-content">
          <h1 className="my-2 text-center">Login</h1>
          <div className="app-login-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <fieldset>
                <div className="form-row">
                  <div className="col-12">
                    <TextField
                      label="Email"
                      fullWidth
                      size="small"
                      variant="filled"
                      margin="dense"
                      disabled={loading}
                      required
                      autoFocus
                      error={!!errors.email}
                      inputProps={{...register("email", {required: true})}}
                    />
                  </div>
                  <div className="col-12">
                    <TextField
                      label="Password"
                      fullWidth
                      size="small"
                      variant="filled"
                      margin="dense"
                      type="password"
                      disabled={loading}
                      required
                      error={!!errors.password}
                      inputProps={{...register("password", {required: true})}}
                    />
                  </div>
                </div>

                <div className="my-3 d-flex align-items-center justify-content-center">
                  <Link to="/register" className="text-gradient text-decoration-none mr-3">
                    Create an account
                  </Link>
                  <Button className="bg-gradient" type="submit" variant="contained" color="primary" disabled={loading}>
                    Login
                  </Button>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {loading &&
        <div className="position-absolute">
          <CircularProgress/>
        </div>
      }
    </div>
  );
};


export default SignIn;
