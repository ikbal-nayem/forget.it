import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { useForm } from "react-hook-form";
import { patch } from "./server_actions";
import { toast } from "react-toastify";
import { USER_DATA } from "constants/ActionTypes";


export default () => {
  const [loading, setLoading] = React.useState(false)
  const {authUser} = useSelector(({auth}) => auth)
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: authUser
  });

  const onSubmit = (data)=>{
    setLoading(true)
    patch('update_user_info', data)
      .then(resp => {
        toast.success('Information updated!')
        dispatch({type: USER_DATA, payload: resp})
      })
      .catch(error => {
        if(error.status === 400){
          Object.keys(error.data).forEach(field=>{
            if(field !== 'username'){
              toast.error(error.data[field][0])
              setError(field, {message: error.data[field][0]})
            }
          })
        }
      })
      .finally(()=>setLoading(false))
  }
  
  return (
    <div className="p-3">
      <h3 className="mb-3 pb-2 border-bottom text-center">User Information</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-row">
          <div className="col-6">
            <TextField
              label="First Name"
              fullWidth
              size="small"
              margin="dense"
              disabled={loading}
              required
              autoFocus
              error={!!errors.first_name}
              inputProps={{ ...register("first_name", { required: true }) }}
            />
          </div>
          <div className="col-6">
            <TextField
              label="Last Name"
              fullWidth
              size="small"
              margin="dense"
              disabled={loading}
              required
              error={!!errors.last_name}
              inputProps={{ ...register("last_name", { required: true }) }}
            />
          </div>
          <div className="col-8">
            <TextField
              label="Username"
              fullWidth
              size="small"
              margin="dense"
              disabled
              value={authUser.username}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12">
            <TextField
              label="Email"
              fullWidth
              size="small"
              margin="dense"
              type="email"
              disabled={loading}
              required
              error={!!errors.email}
              inputProps={{ ...register("email", { required: true }) }}
            />
          </div>
          {!authUser.email_verified &&
            <Alert className="w-100 py-0" severity="warning">Email is not verified! <strong>Verify now</strong></Alert>
          }
        </div>
        <div className="my-3 d-flex align-items-center justify-content-center">
          <Button className="bg-gradient" size="small" type="submit" variant="contained" color="primary" disabled={loading}>
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}