import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Navbar from "./Navbar";

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


  
  function Filter() {
      
    const[filter_, setFilter] = useState(false);
    
    const[data, setData] = useState([]);
    const[title, setTitle] = useState('');


    function titleInputHandler(e){
        setTitle(e.target.value);
    }


    useEffect(()=>{

        fetch('/api/posts/')
        .then((response) =>{
            return response.json();
        })
        .then((json) =>{
            setData(json);
            
            
        });

        
    }, []);

    const classes = useStyles();


    

    
    return (
        <>
        <Navbar/>
        <div  style={{display:'flex', flexDirection:'column'}}>
            <form className={classes.root} style={{marginLeft:'4%', marginTop:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Filtro
                </Typography><br/>
                <div>
                    <div className="Login">
                        <TextField style={{width: '100%'}} id="outlined-basic" onChange={titleInputHandler} label="Titulli" variant="outlined" />
                    </div>
                </div>
            </form>
            <div style={{display:'flex', flexDirection:'row', width:'92%',marginLeft:'4%'}} className="Home">
                {data.filter((value)=>{
                    if(title==''){
                        return value
                    } else if(value.name.toLowerCase().includes(title.toLowerCase())){
                        return value
                    }
                    }).map((posts, index)=>{
                        return(<a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
                        name={posts.name.slice(0, 21)}
                        description={posts.description}
                        features={posts.features.slice(0, 31)+'...'}
                        city={posts.city}
                        reward={posts.reward}
                        image={posts.photo}
                        /></a>);
                    })}
            </div>
        </div>
       
        </>
        );
    }

export default Filter;
  