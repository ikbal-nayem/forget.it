import React from "react";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { PersonPin, Search } from "@material-ui/icons";
import headerStyle from './style';
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";
import { SEARCH_QUERY } from "constants/ActionTypes";


// eslint-disable-next-line
export default ()=>{
  const classes = headerStyle();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e)=> dispatch({type:SEARCH_QUERY, payload: e.target.value})


  return(
    <div className={`${classes.root} bg-gradient`}>
      <div className="container d-flex h-100 align-items-center justify-content-between">
        <Link to="/app/home" className="text-decoration-none">
          <h3 className={classes.header}>forget.it</h3>
        </Link>
        <div className={classes.searchBox}>
          <input className={classes.searchInput} onChange={handleSearch} placeholder="Search..."/>
          <Search fontSize="small"/>
        </div>
        <IconButton size="small" className={classes.user} onClick={handleClick}>
          <PersonPin fontSize="large"/>
        </IconButton>
        <UserMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose}/>
      </div>
    </div>
  )
}