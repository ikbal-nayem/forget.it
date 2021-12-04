import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    border: 0,
    borderBottomLeftRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    position: "fixed",
    width: "100%",
    zIndex: 99
  },
  header: {
    color: '#fff',
    margin: 0,
    fontSize: '1.5rem'
  },
  user: {
    color: '#fff'
  },
  searchBox: {
    background: '#ffffff73',
    backdropFilter: 'blur(20px)',
    height: 30,
    borderRadius: 50,
    paddingRight: 5,
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    outline: 'none',
    border: 'none',
    paddingLeft: 10,
    background: 'transparent',
    minWidth: 120
  }
});