import React from 'react';
import {IconButton, Link} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Edit, DeleteForever} from '@material-ui/icons';
import homeStyles from './style';
import { Grid } from '@material-ui/core';


const getHost = (url)=> new URL(url).host

export default function Credentials({credential_list, handleList, formOpen}) {
  const classes = homeStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false);

  
  return (
    <div className={classes.root}>
      {credential_list.map((cre, i)=>(
        <Accordion key={cre.id} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
          >
            {expanded !== `panel${i}` &&
              <img 
                width={22}
                height={22}
                alt="."
                className="mr-3 rounded-circle"
                src={`https://besticon-demo.herokuapp.com/icon?url=${cre.url}&size=16..32..64&fallback_icon_color=fff`} />
            }
            <Typography className={`text-truncate ${classes.heading}`}>{cre.title || getHost(cre.url)}</Typography>
            <Typography className={classes.secondaryHeading}>{getHost(cre.url)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CredentialDetails credential={cre} handleList={handleList} formOpen={formOpen}/>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}


const CredentialDetails = ({credential, handleList, formOpen})=>{
  const [show, setShow] = React.useState(false)
  return(
    <Grid container spacing={2}>
      <Grid item>
        <img
          width={80}
          height={80}
          alt="logo" 
          className="rounded"
          src={`https://besticon-demo.herokuapp.com/icon?url=${credential.url}&size=64..128..256&fallback_icon_color=fff`} />
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              <Link href={credential.url} target="_blank">{getHost(credential.url)}</Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Username - <strong className="border rounded px-1">{credential.username}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Password - <strong className="border rounded px-1" onDoubleClick={()=>setShow(!show)}>{show?credential.pswd:'########'}</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <div className="d-flex flex-column">
            <IconButton color="primary" onClick={()=>formOpen(credential)}>
              <Edit/>
            </IconButton>
            <IconButton onClick={()=>handleList('DELETE', credential)}>
              <DeleteForever color="error"/>
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
