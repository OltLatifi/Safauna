import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import axios from 'axios';



const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
      Authorization: localStorage.getItem('access_token')
      ? 'JWT' + localStorage.getItem('access_token')
      : null,
      'Content-Type': 'application/json',
      accept: 'application/json'
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Navbar() {
  const classes = useStyles();
  const [accessToken, setAccessToken] = useState((localStorage.getItem('access_token')));

  useEffect(()=>{
    checkLogIn();

    }, []
  );


  function checkLogIn(){
    if(accessToken !== null){
      return(
              <>
                <Button color="inherit" href={'/logout'}>Logout</Button>
              </>
            );
    } else {
      return(
              <>
                <Button color="inherit" href={'/login'}>Login</Button>
              </>);
    }

  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.menuButton}>
            Safauna
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" href={'/'}>Ballina</Button>
            <Button color="inherit" href={'/create-post'}>Posto</Button>
            <Button color="inherit" href={'/filter'}>Filtro</Button>
            <Button color="inherit" href={'/articles'}>Artikuj</Button>
          </Typography>
          {checkLogIn()}

          
          <Button color="inherit" href={'/register'}>Regjistrohu</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}