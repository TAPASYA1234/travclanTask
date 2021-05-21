import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    border:3,
    marginBottom: 4
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

const SingleCustomerCard = ({props})=> {
  const classes = useStyles();

  const {firstname,lastname,avatarUrl,email,phone,hasPremium} = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.box} spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="person profile" src={avatarUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {firstname}{lastname}
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Email: {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Phone: {phone}
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

export default SingleCustomerCard;