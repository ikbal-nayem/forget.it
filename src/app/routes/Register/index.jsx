import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from 'react-hook-form';
import logo from '../../../assets/images/logo.svg'
import signupStyle from './style';
import { toast } from 'react-toastify';
import axios from 'util/Api';


const Register = (props) => {
  const classes = signupStyle();
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    mode: 'onChange'
  });
  const token = useSelector(({auth}) => auth.token);

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  }, [token, props.history]);


  const onSubmit = (data)=>{
    if(data['password'] !== data['conf_password']){
      setError('password', {message: 'Those passwords didn’t match.'})
      setError('conf_password', {message: 'Those passwords didn’t match.'}, {shouldFocus: true})
      toast.warning('Those passwords didn’t match. Try again.')
    } else {
      setLoading(true)
      axios.post('/api/user/register', data)
        .then(resp => {
          if(resp.status === 201){
            toast.success('Account has been created successfully!')
            props.history.push('/login')
            toast.info('You can login now!')
          }
        })
        .catch(error => {
          if(error.response.status === 400){
            Object.keys(error.response.data).forEach(field=>{
              if(field !== 'username'){
                toast.error(error.response.data[field][0])
                setError(field, {message: error.response.data[field][0]})
              }
            })
          }
        })
        .finally(()=>setLoading(false))
    }
  }


  
  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-gradient">
      <div className={`${classes.root} animated slideInUpTiny animation-duration-4`}>

        <div className="mb-3">
          <h1 className={`${classes.title} text-gradient`}>forget.it</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <Link to="/" title="cms">
            <img width={140} src={logo} alt="cms"/>
          </Link>
        </div>

        <div className="app-login-content">
          <h1 className="my-2 text-center">Create an Account</h1>
          <div className="app-login-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <fieldset>
                <div className="form-row">
                  <div className="col-6">
                    <TextField
                      label="First Name"
                      fullWidth
                      size="small"
                      variant="filled"
                      margin="dense"
                      disabled={loading}
                      required
                      autoFocus
                      error={!!errors.first_name}
                      inputProps={{...register("first_name", {required: true})}}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      label="Last Name"
                      fullWidth
                      size="small"
                      variant="filled"
                      margin="dense"
                      disabled={loading}
                      required
                      error={!!errors.last_name}
                      inputProps={{...register("last_name", {required: true})}}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    <TextField
                      label="Email"
                      fullWidth
                      size="small"
                      variant="filled"
                      margin="dense"
                      type="email"
                      disabled={loading}
                      required
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
                      helperText={!!errors.password && (errors.password?.message || 'Password should be atleast 8 digit.')}
                      error={!!errors.password}
                      inputProps={{...register("password", {required: true, minLength: 8})}}
                    />
                  </div>
                  <div className="col-12">
                    <TextField
                      label="Confirm Password"
                      fullWidth
                      size="small"
                      variant="filled"
                      margin="dense"
                      type="password"
                      disabled={loading}
                      required
                      helperText={!!errors.conf_password && (errors.conf_password?.message || 'Password should be atleast 8 digit.')}
                      error={!!errors.conf_password}
                      inputProps={{...register("conf_password", {required: true, minLength: 8})}}
                    />
                  </div>
                </div>

                <div className="my-3 d-flex align-items-center justify-content-center">
                  <Link to="/login" className="text-gradient text-decoration-none mr-3">
                    Already have an account
                  </Link>
                  <Button className="bg-gradient" type="submit" variant="contained" color="primary" disabled={loading}>
                    Sign up
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


export default Register;
