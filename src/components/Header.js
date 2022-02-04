import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        height: 60
    },
    image:{
        height:40,
        width:40,
        marginRight:10
    },
   
}));


const Header = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.root}>
                <Toolbar>
                    <img
                        src="/1.png"
                        className={classes.image}
                        alt="logo"
                    />
                    <Link href="/">
                    <Typography variant="h6" style={{color:'white'}} >Bus Info Embilipitiya</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;