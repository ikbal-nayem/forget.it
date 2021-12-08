import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {userSignIn} from 'actions/Auth';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from 'react-hook-form';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg'
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
      <div className={`${classes.root} animated fadeIn animation-duration-2`}>

        <div className="mb-3 animated flipInX">
          <h1 className={`${classes.title} text-gradient`}>forget.it</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center animated zoomIn animation-duration-2 animation-delay-1">
          <Logo width={150} height="100%"/>
        </div>

        <div className="app-login-content">
          <h1 className="my-2 text-center animated slideInDown animation-duration-1">Login</h1>
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
                      className="animated slideInDown animation-duration-2"
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
                      className="animated slideInDown animation-duration-3"
                      type="password"
                      disabled={loading}
                      required
                      error={!!errors.password}
                      inputProps={{...register("password", {required: true})}}
                    />
                  </div>
                </div>

                <div className="my-3 d-flex align-items-center justify-content-center animated slideInDown animation-duration-4">
                  <Link to="/register" className="text-gradient text-decoration-none mr-3">
                    Create an account
                  </Link>
                  <Button className="bg-gradient" type="submit" size="small" variant="contained" color="primary" disabled={loading}>
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
