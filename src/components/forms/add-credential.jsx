import React from 'react'
import { Button, TableCell, TableRow, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { SaveRounded } from '@material-ui/icons';
import { post } from 'app/routes/Home/server_actions';



function AddCredential({c_id, handleList}) {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [saving, setSaving] = React.useState(false)

  const onSubmit = handleSubmit((data)=>{
    setSaving(true)
    data['credential_url'] = c_id
    post('add_urlwise_credential', data)
      .then(resp => {
        handleList('ADD', resp)
      })
      .finally(()=>setSaving(false))
  })

  return(
    <React.Fragment>
      <TableRow>
        <TableCell className="px-2" padding="checkbox">
          <TextField
            placeholder="Username"
            size="small"
            fullWidth
            autoFocus
            disabled={saving}
            error={!!errors.username}
            inputProps={{...register("username", { required: true })}}
            onKeyPress={e=>e.key ==='Enter' && onSubmit(e)}
          />  
        </TableCell>
        <TableCell className="px-2" padding="checkbox">
          <TextField
            placeholder="Password"
            size="small"
            fullWidth
            disabled={saving}
            error={!!errors.pswd}
            inputProps={{...register("pswd", { required: true })}}
            onKeyPress={e=>e.key ==='Enter' && onSubmit(e)}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} padding="none" className="border-0">
          <div className="d-flex justify-content-center mt-3">
            <Button size="small" variant="outlined" disabled={saving} className="bg-gradient text-white" onClick={onSubmit}>
              Save &nbsp; <SaveRounded fontSize="small"/>
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default AddCredential
