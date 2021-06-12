import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Post from './Post';


// change this later with data from the api
const Kategori = [
    {
        value: 'Humbje',
    },
    {
        value: 'Gjetje',
    },
    {
        value: 'Adoptim',
    },
  ];


const Raca = [
    {
        value: 'Belgian Malinois',
    },
    {
        value: 'German Shephard',
    },
];


const Qyteti = [
    {
        value: 'Gjilan',
    },
    {
        value: 'Prishtine',
    },
    {
        value: 'Prizren',
    },
    {
        value: 'Peje',
    },
    {
        value: 'Ferizaj',
    },
    {
        value: 'Mitrovice',
    },
    {
        value: 'Gjakove',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          }},
  }));

function ComposePost() {


    // get the csrf token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    const[category, setCategory] = useState('Humbje');
    const[animalName, setAnimalName] = useState('');
    const[features, setFeatures] = useState('');
    const[reward, setReward] = useState('');
    const[description, setDescription] = useState('');
    const[breed, setBreed] = useState('');
    const[city, setCity] = useState('');
    const[phone, setPhone] = useState('');



    function categoryInputHandler(e){
        setCategory(e.target.value);
    }

    function nameInputHandler(e){
        setAnimalName(e.target.value);
    }

    function featuresInputHandler(e){
        setFeatures(e.target.value);
    }

    function rewardInputHandler(e){
        setReward(e.target.value);
    }

    function breedInputHandler(e){
        setBreed(e.target.value);
    }

    function descriptionInputHandler(e){
        setDescription(e.target.value);
    }

    function cityInputHandler(e){
        setCity(e.target.value);
    }

    function phoneInputHandler(e){
        setPhone(e.target.value);
    }

    function buttonPressed(){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json",
           },
            body: JSON.stringify({
                category: category,
                name: animalName,
                description: description,
                features: features,
                breed: breed,
                city: city,
                // user: 1,
                reward: reward,
                phone: phone,
            })
        };
        fetch("/api/create-post/", requestOptions)
        .then((response) => response.json());
    }
    
    const classes = useStyles();

    return (
        <>
        <div  style={{display:'flex', flexDirection:'row'}}>
            <form className={classes.root} style={{margin:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Krijo nje postim
                </Typography><br/>
                <div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={nameInputHandler} label="Emri" variant="outlined" />
                    </div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={featuresInputHandler} label="Tiparet dalluese" variant="outlined" />
                    </div>
                    <div>
                        <TextField select id="outlined-basic"
                                    onChange={categoryInputHandler}
                                    label="Kategori" variant="outlined">
                                    {Kategori.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>))}
                        </TextField>
                        <TextField select id="outlined-basic"
                                    onChange={breedInputHandler}
                                    label="Raca" variant="outlined">
                                    {Raca.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>))}
                        </TextField>
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <TextField select id="outlined-basic" onChange={cityInputHandler} label="Qyteti" variant="outlined" >
                            {Qyteti.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.value}
                                            </MenuItem>))}
                        </TextField>
                        <TextField id="outlined-basic" onChange={rewardInputHandler} type="number" label="Shperblimi" variant="outlined" />
                    </div>
                    <TextField id="outlined-basic" onChange={descriptionInputHandler} label="Pershkrimi" variant="outlined" multiline rows={5}/>
                </div>
                <div>
                    
                    <TextField id="outlined-basic" onChange={phoneInputHandler} type="number" label="Numri i telefonit" variant="outlined" />
                </div>
                <div>
                    <Button style={{margin:'1ch', width:'55ch'}} variant="contained" color="primary" onClick={buttonPressed}>Posto</Button>
                </div>
                
            </div>
            </form>

            <div style={{width:'50%', marginTop:'4%'}}>
            <Typography variant="h2" component="h3">
                Pamje paraprake
            </Typography><br/>
            <Post
                name={animalName}
                description={description}
                features={features}
                city={city}
                reward={reward}
            />
            </div>
        </div>
        </>
        );

  }

export default ComposePost;
  