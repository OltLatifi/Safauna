import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';

import Post from './Post';
import axios from 'axios';

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
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showEmailWarning, setShowEmailWarning] = useState(false);
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);
    const [showUsernameWarning, setUsernameWarning] = useState(false);




    function usernameInputHandler(e){
        setUsername(e.target.value);
    }

    function emailInputHandler(e){
        setEmail(e.target.value);
    }

    function passwordInputHandler(e){
        setPassword(e.target.value);
    }
    function confirmPasswordInputHandler(e){
        setConfirmPassword(e.target.value);
    }

    

    function buttonPressed(e){

        if (password === confirmPassword) {
            if (username.split(" ").length < 2) {
            setUsernameWarning(false);
            } else {
            setUsernameWarning(true);
            }
            if (
            password.split("").length >= 8 &&
            (email.includes(
                "@",
                "`",
                "!",
                "#",
                "$",
                "%",
                "^",
                "&",
                "*",
                "(",
                ")",
                "-",
                "=",
                "+",
                "[",
                "]",
                "{",
                "}",
                ";",
                ":",
                "'",
                '"',
                "<",
                ">",
                ",",
                ".",
                "?",
                "/",
                "|"
            ) ||
                email.includes("1", "2", "3", "4", "5", "6", "7", "8", "9", "0"))
            ) {
            setShowPasswordWarning(false);
    
            // if the email is not valid (doesn't contain '@example.com')
            if (email.split("@").length > 1) {
                setShowEmailWarning(false);
    
                const registerFormData = new FormData();
                registerFormData.append("username", username);
                registerFormData.append("email", email);
                registerFormData.append("password", password);
    
                const loginFormData = new FormData();
                loginFormData.append("username", username);
                loginFormData.append("password", password);
    
                axios
                .post("https://www.streho.com/api/register/", registerFormData)
                .then((registration) => {
                    if (registration.status === 201) {
                    alert("Perdoruesi u regjistrua me sukses!");
                    }
                })
                .catch((error) => {
                    alert(
                    `Username-i juaj eshte i zene ose ka hapesire ne mes.\n${error.message}`,
                    );
                });
            } else {
                setShowEmailWarning(true);
            }
            } else {
            if (email.split("@").length === 1) {
                setShowEmailWarning(true);
            } else {
                setShowEmailWarning(false);
            }
            setShowPasswordWarning(true);
            }
        } else {
            if (email.split("@").length === 1) {
            setShowEmailWarning(true);
            } else {
            setShowEmailWarning(false);
            }
            alert("Fjalekalimi nuk perputhet me konfirmimin e fjalekalimit.");
        }

        
    }


    const renderEmailWarning = () => {
        if (showEmailWarning) {
          return (
            <div
              style={{
                width: "60%",
                backgroundColor: "#ffd1d6",
                color: "black",
                border: "2px solid #fca4ad",
                borderRadius: 4,
              }}
            >
              <Typography variant="body2">
                Ju lutem vendosni nje email adrese valide!
              </Typography>
            </div>
          );
        }
      };
    
      const renderPasswordWarning = () => {
        if (showPasswordWarning) {
          return (
            <div
              style={{
                width: "60%",
                backgroundColor: "#ffd1d6",
                color: "black",
                border: "2px solid #fca4ad",
                borderRadius: 4,
              }}
            >
              <Typography variant="body2">
                Ju lutem vendosni nje fjalekalim me se paku 8 shkronja dhe nje numer apo simbol!
              </Typography>
            </div>
          );
        }
      };
    
      const renderUsernameWarning = () => {
        if (showUsernameWarning) {
          return (
            <div
              style={{
                width: "60%",
                backgroundColor: "#ffd1d6",
                color: "black",
                border: "2px solid #fca4ad",
                borderRadius: 4,
              }}
            >
              <Typography variant="body2">
                Username-i nuk mund te permbaje hapesira!
              </Typography>
            </div>
          );
        }
      };

    const classes = useStyles();


    

    
    return (
        <>
        <Navbar/>
        <center>
        <div  style={{display:'flex', flexDirection:'row', paddingBottom:'9%'}}>
            <form className={classes.root} style={{margin:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Regjistrohu
                </Typography><br/>
                <div className="Login">
                    <div>
                        <TextField style={{width: '60%'}} id="outlined-basic" onChange={usernameInputHandler} label="Emri" variant="outlined" placeholder="Vetem emrin"/>
                    </div>
                    {renderUsernameWarning()}
                    <div>
                        
                        <TextField style={{width: '60%'}} id="outlined-basic" onChange={emailInputHandler} label="Email" variant="outlined" placeholder="name@company.com" />
                    </div>
                    {renderEmailWarning()}
                    <div>
                        <TextField style={{width: '60%'}} id="outlined-basic" onChange={passwordInputHandler} label="Fjalekalimi" type="password" variant="outlined" />
                    </div>
                    <div>
                        <TextField style={{width: '60%'}} id="outlined-basic" onChange={passwordInputHandler} label="Konfirmo fjalekalimin" type="password" variant="outlined" />
                    </div>
                    {renderPasswordWarning()}
                    <div>
                        <Button style={{margin:'1%', width: '60%'}} variant="contained" color="primary" onClick={buttonPressed}>Regjistrohu</Button>
                    </div>
                </div>
            </form>
        </div>
        </center>
        
        </>
        );

  }

export default Register;
  