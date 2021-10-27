import React from "react";
import { IconButton } from "@material-ui/core";
import { PersonRounded, Search } from "@material-ui/icons";
import headerStyle from './style';
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";



export default ()=>{
  const classes = headerStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return(
    <div className={`${classes.root} bg-gradient`}>
      <div className="container d-flex h-100 align-items-center justify-content-between">
        <Link to="/app/home" className="text-decoration-none">
          <h3 className={classes.header}>forget.it</h3>
        </Link>
        <div className={classes.searchBox}>
          <input className={classes.searchInput} placeholder="Search..."/>
          <Search fontSize="small"/>
        </div>
        <IconButton className={classes.user} onClick={handleClick}>
          <PersonRounded/>
        </IconButton>
        <UserMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose}/>
      </div>
    </div>
  )
}