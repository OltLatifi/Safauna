import React, { useState, useEffect  } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

import Navbar from './Navbar';


function PostDetail(props) {

    const[delete_, setDelete] = useState(false);
    const id = props.match.params.id;
    const[details, setDetails] = useState([]);
    const[comments, setComments] = useState([]);
    const[comment, setComment] = useState('');
    const[user, setUser] = useState('');




    function commentInputHandler(e){
        setComment(e.target.value);
    }

    // note to self: useEffect is used to tell react that it needs to do something after render
    useEffect(()=>{
        getData();

        }, []
    );

    function handleScroll() {
        window.scroll({
          top: 0,
          left: 0, 
          behavior: 'smooth',
        });
      }

    async function getData() {
        // post data
        fetch(`/api/posts/${id}/`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json))
        .catch((error) =>console.log(error));


        // comment get data
        fetch('/api/comments/')
        .then((response) =>{
            return response.json();
        })
        .then(json =>setComments(json))
        .catch((error) =>console.log(error));


        // user data

        const requestOptions = {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
            
        }

        fetch('http://127.0.0.1:8000/api/loged-in/', requestOptions)
        .then((response)=>{
            return response.json();
        }).then((json)=>{
            setUser(json.username);
        })
    }



    function submitButton(){
        const requestOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: comment,
                post: details.id,
                user: user,
            })
          };
        
          fetch("http://127.0.0.1:8000/api/create-comment/", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    function deleteData() {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "multipart/form-data"}
        }
        fetch(`/api/posts/${id}/delete/`, requestOptions)
        .then((response) => props.history.push('/'));
    }


    function confirmDelete(){
        {handleScroll()}
        if(delete_==true){
            return(
            <div>
                <br/>
                <center>
                    <Typography variant="h4" component="h4">A jeni te sigurte qe doni te fshihni kete postim?</Typography>
                    <Button variant="contained" color="secondary" onClick={() => deleteData()}>Fshij</Button>
                    <Button variant="contained" color="default" onClick={() => setDelete(false)}>Anulo</Button>
                </center>
                
            </div>
            );
            
        }
    }

    function renderDeleteButton(){
        if(user===details.user){
            return(
                <>
                    <Button variant="contained" color="default" onClick={() => setDelete(true)}>Fshij</Button>
                    
                </>
            );
            
        }
    }


    return(
        <>
            <Navbar/>
            {confirmDelete()}

            <Card style={{width:'50%', margin:'2% 25%'}}>
                    <CardMedia style={{aspectRatio: '16/9', width: '100%', objectFit:'cover'}} image={details.photo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            {details.name}<br/>
                            <Typography variant="body1" color="textSecondary">{details.data}</Typography>
                        </Typography>
                            <Typography variant="body1" color="textSecondary">💵Shperblimi: {details.reward} euro</Typography>
                            <Typography variant="body2" color="textSecondary"><CallTwoToneIcon/>Telefoni: {details.phone}</Typography>
                            <Typography variant="body2" color="textSecondary"><CategoryTwoToneIcon/>Kategoria: {details.category}</Typography>
                            <br/><br/>
                            <Typography variant="h6" component="p">🌆Qyteti: {details.city}</Typography>
                            <Typography variant="h6" component="p">🐶Raca: {details.breed}</Typography>
                            <br/>
                            <Typography variant="h5" component="p"><BookTwoToneIcon/> Tiparet dalluese: {details.features}</Typography>
                            <Typography variant="h5" component="p"><DescriptionTwoToneIcon/>Pershkrimi: {details.description}</Typography>

                            <br/>
                            {renderDeleteButton()}
                            
                            <Typography variant="h4" component="p" style={{marginTop:'2%'}}>Komentet:</Typography><br/>
                            {comments.map((comments, index) =>{
                                if(comments.post == details.id){
                                    return(
                                        <>
                                        <Card>
                                            <CardHeader
                                                title={comments.comment}
                                                subheader={`${comments.user} - ${comments.date}`}
                                            />
                                        </Card>
                                        <br/>
                                    </>);
                                }  

            })}

                    <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'row'}}>
                        <TextField id="standard-basic" label="Shtoni nje koment" style={{width:'80%'}} onChange={commentInputHandler}/>
                        <Button variant="contained" color="primary" onClick={submitButton} style={{width:'15%', marginLeft:'5%',}}>Komento</Button>
                    </form>
                            
                            
                    </CardContent>
                </Card>
        </>
    );

}

export default PostDetail;
  