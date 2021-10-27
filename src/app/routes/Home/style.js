import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom: 15
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 'bold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: 10
  },
}));