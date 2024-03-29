import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';


// eslint-disable-next-line
export default {
  palette: {
    primary: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
      contrastText: '#fff'
    },
    secondary: {
      light: green[300],
      main: green['A200'],
      dark: green[700],
      contrastText: '#fff'
    }
  },
  status: {
    danger: 'orange',
  },
  typography: {
    button: {
      fontWeight: 400,
      textAlign: 'capitalize'
    },
  },
};
