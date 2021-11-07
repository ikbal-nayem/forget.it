import React from 'react';
import {IconButton, Link, Grid, Accordion, Typography, AccordionDetails, AccordionSummary} from '@material-ui/core';
import {Edit, DeleteForever, ExpandMore} from '@material-ui/icons';
import CredentialsTable from 'components/Table/CredentialsTable';
import homeStyles from './style';
import {ReactComponent as EmptyList} from 'assets/images/empty.svg';


const getHost = (url)=> new URL(url).host

export default function Credentials({credential_list, handleList, formOpen}) {
  const classes = homeStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false);


  if(credential_list.length === 0){
    return(
      <div className="d-flex flex-column align-items-center">
        <EmptyList height={120} width={120} className="mb-3 mt-5"/>
        <h2 className="text-gradient animated slideInUp animation-duration-3">No credentials found</h2>
      </div>
    )
  }
  
  return (
    <div className={classes.root}>
      {credential_list.map((cre, i)=>(
        <Accordion key={cre.id} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
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


const CredentialDetails = React.memo(({credential, handleList, formOpen})=>{
  return(
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <img
          width={80}
          height={80}
          alt="logo"
          className="rounded"
          src={`https://besticon-demo.herokuapp.com/icon?url=${credential.url}&size=64..128..256&fallback_icon_color=fff`} />
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs={12} container justify="space-between">
          <Grid item xs={8} className="text-truncate">
            <Typography gutterBottom variant="subtitle1">
              <Link className="text-gradient" href={credential.url} target="_blank">
                {getHost(credential.url)}
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <IconButton size="small" onClick={()=>formOpen(credential)}>
              <Edit fontSize="small"/>
            </IconButton>
            <IconButton size="small" onClick={()=>handleList('DELETE', credential)}>
              <DeleteForever fontSize="small" color="error"/>
            </IconButton>
          </Grid>
        </Grid>
        <CredentialsTable credentials={credential.credentials}/>
      </Grid>
    </Grid>
  )
})
