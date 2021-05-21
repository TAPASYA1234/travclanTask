import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    border:3,
    marginBottom: 4,
    backgroundColor:'yellow'
  },
  image: {
    width: 118,
    height: 118,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const SingleBidData = ({props})=> {
  const classes = useStyles();

  const {amount,carTitle,created} = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.box} spacing={2}>
    
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
            
                <Typography gutterBottom variant="subtitle1">
                  {carTitle}
                </Typography>
            
                <Typography variant="body2" gutterBottom>
                 Amount: {amount}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Created: {created}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" >
                
                </Typography>
              </Grid>
            </Grid>
        
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SingleBidData;