import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Copyright =() => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        codemo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  container:{
    marginLeft:70
  }
}));

const Footer = ()=> {
  const classes = useStyles();

  return (
    <div >
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="body1">All right reserved</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;