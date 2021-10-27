import React from "react";
import { MenuItem, Popover } from "@material-ui/core";
import { userSignOut } from "actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


// eslint-disable-next-line
export default ({open, anchorEl, handleClose}) => {
  const dispatch = useDispatch();
  const {authUser} = useSelector(({auth}) => auth)


  return(
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <h3 className="text-center m-0 p-3 text-gradient">
        {authUser?.first_name} {authUser?.last_name}
      </h3>
      <hr className="w-75 m-auto" />
      <Link to="/app/settings" className="text-dark text-decoration-none">
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Link>
      <MenuItem onClick={()=>dispatch(userSignOut())}>Logout</MenuItem>
    </Popover>
)}