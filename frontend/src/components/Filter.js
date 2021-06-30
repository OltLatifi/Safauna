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

    const[data, setData] = useState('');
    const[category, setCategory] = useState('');
    const[title, setTitle] = useState('');



    function categoryInputHandler(e){
        setCategory(e.target.value);
        
    }

    function titleInputHandler(e){
        setTitle(e.target.value);
    }


    useEffect(()=>{
        console.log("work")

        fetch('/api/posts/')
        .then((response) =>{
            return response.json();
        })
        .then((json) =>{
            setData(json);
            
            
        });

        
    }, []);

    const classes = useStyles();

    function filter(){
        if(data != ''){
            if(filter_ == true){
                const filteredData = data.filter(item => item.category == category);
                console.log(filteredData);
                filteredData.map((posts, index)=>{
                    return(<h1>Please work</h1>);
                  
            }); 
        }
        }
        
    }


    

    
    return (
        <>
        <Navbar/>
        <div  style={{display:'flex', flexDirection:'row'}}>
            <form className={classes.root} style={{margin:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Filtro
                </Typography><br/>
                <div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={categoryInputHandler} label="Kategoria" variant="outlined" />
                    </div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={titleInputHandler} label="Titulli" type="password" variant="outlined" />
                    </div>
                </div>
            </form>
            <div>
                <Button style={{margin:'1ch', width:'55ch'}} variant="contained" color="primary" onClick={()=>setFilter(true)}>Filtro</Button>
            </div>
            <div>
                
            </div>
        </div>
        {filter()}
        </>
        );

  }

export default Filter;
  