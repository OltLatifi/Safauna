import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Navbar from "./Navbar";

import Post from './Post';

import { withRouter } from 'react-router';
import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'https://streho.pythonanywhere.com/',
    timeout: 5000,
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
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          }},
  }));

function Login(props) {



    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');



    function usernameInputHandler(e){
        setUsername(e.target.value);
    }

    function passwordInputHandler(e){
        setPassword(e.target.value);
    }

    

    function buttonPressed(e){

        axiosInstance.post(`https://streho.pythonanywhere.com/api/token/`, {
            username:username,
            password:password}
            )
        .then((response)=>{
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axiosInstance.defaults.headers['Authorization'] = 
            'JWT'+ localStorage.getItem('access_token');
            props.history.push('/')
        })


        
    }

    const classes = useStyles();


    

    
    return (
        <>
        <Navbar/>
        <center>
        <div  style={{display:'flex', flexDirection:'row', paddingBottom:'14%'}}>
            <form className={classes.root} style={{margin:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Log In
                </Typography>
                <Typography variant="body2" component="h6" style={{margin:'2% 0'}}>
                    Nuk keni nje llogari? <a href={'/register'} style={{color: 'blue'}}>Regjistrohuni!</a>
                </Typography>
                <div className="Login">
                    <div>
                        <TextField style={{width: '60%'}} id="outlined-basic" onChange={usernameInputHandler} label="Emri" variant="outlined" />
                    </div>
                    <div>
                        <TextField style={{width: '60%'}} id="outlined-basic" onChange={passwordInputHandler} label="Fjalekalimi" type="password" variant="outlined" />
                    </div>
                    <div>
                        <Button style={{margin:'1%', width: '60%'}} variant="contained" color="primary" onClick={buttonPressed}>Log in</Button>
                    </div>
                </div>
                <br/>
            </form>
        </div>
        </center>

        
        </>
        );

  }

export default React.memo(Login);
  