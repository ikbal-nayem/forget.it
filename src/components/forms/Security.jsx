import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { post } from "../../app/routes/Settings/server_actions";


// eslint-disable-next-line
export default () => {
  const [loading, setLoading] = React.useState(false)
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data)=>{
    if(data['password'] !== data['conf_password']){
      setError('password', {message: 'Those passwords didn’t match.'})
      setError('conf_password', {message: 'Those passwords didn’t match.'}, {shouldFocus: true})
      toast.warning('Those passwords didn’t match. Try again.')
    } else {
      setLoading(true)
      post('change_password', data)
        .then(resp => {
          toast.success('Password has been changed.')
          reset({})
        })
        .catch(error => {
          if(error.status === 400){
            toast.warning(error.data.message)
            setError('password', {message: error.data.message})
            setError('conf_password', {message: error.data.message})
          } else if(error.status === 401){
            toast.warn("Wrong password! Try again.")
            setError('current_password', {message: error.data.message})
          }
        })
        .finally(()=>setLoading(false))
    }
  }

  return (
    <div className="p-3">
      <h3 className="mb-3 pb-2 border-bottom text-center">Change Password</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-row">
          <div className="col-12">
            <TextField
              label="Current Password"
              fullWidth
              size="small"
              margin="dense"
              type="password"
              disabled={loading}
              required
              error={!!errors.current_password}
              inputProps={{ ...register("current_password") }}
            />
          </div>
          <div className="col-12">
            <TextField
              label="Password"
              fullWidth
              size="small"
              margin="dense"
              type="password"
              disabled={loading}
              required
              helperText={!!errors.password && (errors.password?.message || 'Password should be atleast 8 digit.')}
              error={!!errors.password}
              inputProps={{ ...register("password", { required: true, minLength: 8 }) }}
            />
          </div>
          <div className="col-12">
            <TextField
              label="Confirm Password"
              fullWidth
              size="small"
              margin="dense"
              type="password"
              disabled={loading}
              required
              helperText={!!errors.conf_password && (errors.conf_password?.message || 'Password should be atleast 8 digit.')}
              error={!!errors.conf_password}
              inputProps={{ ...register("conf_password", { required: true, minLength: 8 }) }}
            />
          </div>
        </div>

        <div className="my-3 d-flex align-items-center justify-content-center">
          <Button size="small" className="bg-gradient" type="submit" variant="contained" color="primary" disabled={loading}>
            Change
          </Button>
        </div>

      </form>
    </div>
  )
}