import React, {useState, useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import axios from 'axios';
import clsx from 'clsx';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom:'60px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


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



export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [accessToken, setAccessToken] = useState((localStorage.getItem('access_token')));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    checkLogIn();

    }, []
  );


  function checkLogIn(){
    if(accessToken !== null){
      return(
              <>
                <Button color="inherit" href={'/logout'} style={{marginRight: theme.spacing(2)}}>Logout</Button>
              </>
            );
    } else {
      return(
              <>
                <Button color="inherit" href={'/login'} style={{marginRight: theme.spacing(2)}}>Login</Button>
              </>);
    }

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{display:'flex',flexDirection:'row',}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{flexGrow:1,}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
            <img src={'../../../images/icon_w.svg'} width="50" height="50" alt="icon"/>
          <Typography variant="h7" noWrap>
            Nje shtepi per kafshet
          </Typography>
          
        </Toolbar>
        {checkLogIn()}
        <Button color="inherit" href={'/register'}>Regjistrohu</Button>

      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem>
          <img src={'../../../images/logo.svg'} width="300" height="150" alt="logo"/>
        </ListItem>
        <Divider />
        <ListItem button ><HomeOutlinedIcon/>
          <Button color="primary" href={'/'}>Ballina</Button>
        </ListItem>
        <ListItem button><PostAddRoundedIcon/>
          <Button color="inherit" href={'/create-post'}>Posto</Button>
        </ListItem>
        <ListItem button><FilterListRoundedIcon/>
          <Button color="inherit" href={'/filter'}>Filtro</Button>
        </ListItem>
        <ListItem button><DescriptionOutlinedIcon/>
          <Button color="inherit" href={'/articles'}>Artikuj</Button>
        </ListItem>
        <ListItem button><InfoOutlinedIcon/>
          <Button color="inherit" href={'/about-us'}>Rreth Nesh</Button>
        </ListItem>
        
        </List>
      </Drawer>
      </div>
    
  );
}






