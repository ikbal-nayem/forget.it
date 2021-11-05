import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {AssignmentInd, Link, VpnKey} from '@material-ui/icons';
import Slide from '@material-ui/core/Slide';
import { InputAdornment, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { getSiteTitle, post, put } from 'app/routes/Home/server_actions';
import { toast } from 'react-toastify';
import { success, warning } from 'styles/toast-style';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function CredentialForm({handleList, handleClose, open, update_data}) {
  const [saving, setSaving] = React.useState(false)
  const { register, control, formState: { errors }, getValues, setValue, handleSubmit, reset } = useForm({
    defaultValues: {}
  });

  const onSubmit = (data) => {
    const id = toast.loading("Saving, Please wait...")
    const request_func = update_data.current.id ? put : post
    setSaving(true)
    request_func(update_data.current.id?'update_credential':'add_credential', data)
      .then(resp_data => {
        toast.update(id, success('Credential saved.'));
        handleList(update_data.current.id?'UPDATE':'ADD', resp_data)
        handleClose()
      })
      .catch(()=>toast.update(id, warning("Could not save the credential!")))
      .finally(()=>{setSaving(false)})
  };

  React.useEffect(()=>{
    reset({...update_data.current})
  }, [open, update_data, reset])

  const handleTitle = React.useCallback((e)=>{
    const value = getValues()
    if(!value.title && !!e.target.value){
      getSiteTitle(e.target.value)
        .then(data => setValue('title', data))
    }
  }, [setValue, getValues])


  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="credential-form"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="credential-form" className="text-center">{update_data.current.id?'Update':'Add New'} Credential</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <div className="form-row">
            <div className="col-12">
              <Controller
                control={control}
                name="title"
                render={({field: { onChange, value }}) => (
                  <TextField
                    label="Title"
                    size="small"
                    fullWidth
                    disabled={saving}
                    margin="normal"
                    onChange={onChange}
                    value={value||''}
                  />
                )}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-12">
              <TextField
                label="Website URL"
                size="small"
                fullWidth
                placeholder="www.example.com"
                type="url"
                margin="normal"
                required
                autoFocus
                disabled={saving}
                onBlur={handleTitle}
                error={!!errors.url}
                inputProps={{...register("url", { required: true }), required: ''}}
                InputProps={{
                  endAdornment: <InputAdornment position="end"><Link/></InputAdornment>,
                }}
              />
            </div>
          </div>
          {!update_data.current.id &&
            <div className="form-row">
              <div className="col-sm-6 col-12">
                <TextField
                  label="Username"
                  size="small"
                  margin="normal"
                  fullWidth
                  required
                  disabled={saving}
                  error={!!errors.username}
                  inputProps={{...register("username", { required: true }), required: ''}}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">{<AssignmentInd/>}</InputAdornment>,
                  }}
                />
              </div>
              <div className="col-sm-6 col-12">
                <TextField
                  label="Password"
                  size="small"
                  margin="normal"
                  fullWidth
                  required
                  disabled={saving}
                  error={!!errors.pswd}
                  inputProps={{...register("pswd", { required: true }), required: ''}}
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><VpnKey/></InputAdornment>,
                  }}
                />
              </div>
            </div>
          }
        </DialogContent>
        <DialogActions className="justify-content-center">
          <Button onClick={handleClose} size="small" color="primary" disabled={saving}>
            Cancel
          </Button>
          <Button type="submit" size="small" color="primary" variant="contained" disabled={saving}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
