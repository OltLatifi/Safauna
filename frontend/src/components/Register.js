import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Post from './Post';

import { withRouter } from 'react-router';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          }},
  }));

function Register(props) {



    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');



    function usernameInputHandler(e){
        setUsername(e.target.value);
    }

    function emailInputHandler(e){
        setEmail(e.target.value);
    }

    function passwordInputHandler(e){
        setPassword(e.target.value);
    }

    

    function buttonPressed(e){



        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
        
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        }
        fetch("/api/register/", requestOptions)
        .then((response) => props.history.push('/'));
        // .then((response) => response.json());

        
    }

    const classes = useStyles();


    

    
    return (
        <>
        <center>
        <div  style={{display:'flex', flexDirection:'row'}}>
            <form className={classes.root} style={{margin:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Regjistrohu
                </Typography><br/>
                <div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={usernameInputHandler} label="Emri" variant="outlined" />
                    </div>
                    <div>
                        
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={emailInputHandler} label="Email" variant="outlined" placeholder="name@company.com" />
                    </div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={passwordInputHandler} label="Fjalekalimi" type="password" variant="outlined" />
                    </div>
                    <div>
                        <Button style={{margin:'1ch', width:'55ch'}} variant="contained" color="primary" onClick={buttonPressed}>Regjistrohu</Button>
                    </div>
                </div>
            </form>
        </div>
        </center>
        
        </>
        );

  }

export default Register;
  