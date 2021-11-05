import React from 'react';
import { Button, TableBody, Table, TableCell, TableHead, TableRow, IconButton, Menu, MenuItem, TextField } from '@material-ui/core';
import {AddRounded, PersonOutlineTwoTone, VpnKeyTwoTone, CloseRounded, MoreVert, CreateTwoTone, CheckRounded} from '@material-ui/icons';
import AddCredential from 'components/forms/add-credential';
import {del, put} from 'app/routes/Home/server_actions';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';



function CredentialsTable({credentials}) {
  const [add_one, setAddOne] = React.useState(false)
  const [credential_list, setCredentialList] = React.useState(credentials)

  const handleList = (action, data)=>{
    if(action==='ADD'){
      setCredentialList([...credential_list, data])
      setAddOne(false)
    } else if(action==='DELETE'){
      del('delete_urlwise_credential', data.id)
        .then(resp => {
          if(resp.success){
            toast.info('Credential deleted!')
            setCredentialList(credential_list.filter(cre => cre.id !== data.id))
          }
        })
    } else if(action==='UPDATE'){
      put('update_urlwise_credential', data)
        .then(resp=>{
          let idx = credential_list.findIndex(cre => cre.id === resp.id)
          credential_list[idx] = resp
          setCredentialList([...credential_list])
        })
    }
  }

  
  return (
    <div className="overflow-auto w-100">
      <Table size="small" style={{maxWidth: 500, minWidth: 280}}>
        <TableHead>
          <TableRow>
            <TableCell className="px-2 font-weight-bold">Username &nbsp; <PersonOutlineTwoTone fontSize="small"/></TableCell>
            <TableCell className="px-2 font-weight-bold">Password &nbsp; <VpnKeyTwoTone fontSize="small"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credential_list.map((cre) => (
            <CredentialRow key={cre.id} cre={cre} handleList={handleList} />
          ))}
          {add_one &&
            <AddCredential c_id={credentials[0].credential_url} handleList={handleList}/>
          }
        </TableBody>
      </Table>
      {!add_one &&
        <div className="d-flex justify-content-center mt-3">
          <Button size="small" variant="outlined" className="w-25" onClick={()=>setAddOne(true)}>
            <AddRounded color="action" fontSize="small"/>
          </Button>
        </div>
      }
    </div>
  );
}


const CredentialRow = React.memo(({cre, handleList})=>{
  const [show, setShow] = React.useState(false)
  const [updating, setUpdating] = React.useState(false)
  const [open_menu, setOpenMenu] = React.useState(null)
  const [editing_mode, setEditingMode] = React.useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {username:cre.username, pswd: cre.pswd}
  });

  const handleMenu = (event) => setOpenMenu(event.currentTarget);
  const handleClose = () => setOpenMenu(null);

  const onSubmit = handleSubmit((data)=>{
    setUpdating(true)
    let new_data = {...cre, ...data}
    put('update_urlwise_credential', new_data)
      .then(resp => {
          handleList('UPDATE', resp)
        })
      .finally(()=>setUpdating(false))
    setEditingMode(false)
    setOpenMenu(null)
  })

  return(
    <TableRow key={cre.id}>
      {editing_mode
        ? <React.Fragment>
            <TableCell className="px-2" padding="checkbox">
              <TextField
                placeholder="Username"
                size="small"
                fullWidth
                autoFocus
                disabled={updating}
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
                disabled={updating}
                error={!!errors.pswd}
                inputProps={{...register("pswd", { required: true })}}
                onKeyPress={e=>e.key ==='Enter' && onSubmit(e)}
              />
            </TableCell>
          </React.Fragment>
        : <React.Fragment>
            <TableCell className="px-2 text-break">{cre.username}</TableCell>
            <TableCell className="px-2 text-break">
              <span onDoubleClick={()=>setShow(!show)}>{show?cre.pswd:'########'}</span>
            </TableCell>
          </React.Fragment>
      }
      
      <TableCell className="border-0 p-0" style={{width: 10}}>
        <IconButton size="small" className={editing_mode?'bg-success text-white':'text-dark'} disabled={updating} onClick={editing_mode?onSubmit:handleMenu}>
          {editing_mode?<CheckRounded fontSize="small"/>:<MoreVert fontSize="small"/>}
        </IconButton>
        <Menu
          anchorEl={open_menu}
          open={Boolean(open_menu) && !editing_mode}
          onClose={handleClose}
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
        >
          <MenuItem className="py-0 px-1" style={{minHeight: 'auto'}} onClick={()=>setEditingMode(true)}>
            <CreateTwoTone fontSize="small"/> Edit
          </MenuItem>
          <MenuItem className="py-0 px-1" style={{minHeight: 'auto'}} onClick={()=>handleList('DELETE', cre)}>
            <CloseRounded color="error" fontSize="small"/> Delete
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  )
})


export default React.memo(CredentialsTable);