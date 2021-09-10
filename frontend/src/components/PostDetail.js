import React, { useState, useEffect, lazy, Suspense } from 'react';
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
import InsertCommentIcon from '@material-ui/icons/InsertComment';


import axios from 'axios';
import { withRouter } from 'react-router';



const Navbar = lazy(() => import('./Navbar'));

const renderLoader = () => <p>Loading</p>;

function PostDetail(props) {

    const[delete_, setDelete] = useState(false);
    const id = props.match.params.id;
    const[details, setDetails] = useState([]);
    const[comments, setComments] = useState([]);
    const[comment, setComment] = useState('');
    const[user, setUser] = useState('');
    const[userID, setUserID] = useState('');




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

        fetch('https://www.streho.com/api/loged-in/', requestOptions)
        .then((response)=>{
            return response.json();
        }).then((json)=>{
            setUser(json.username);
            setUserID(json.user);
        })
    }

    

    function submitButton(){
        

        let formData = new FormData();
        formData.append("comment", comment);
        formData.append("post", details.id);
        formData.append("user", userID);
        
        

        axios.post("https://www.streho.com/api/create-comment/", formData)
        window.location.reload(false);
    }
    function deleteData() {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "multipart/form-data"}
        }
        fetch(`/api/posts/${id}/delete/`, requestOptions)
        .then((response) => props.history.push('/'));
    }


    function deleteComment(id_) {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "multipart/form-data"}
        }
        fetch(`/api/comments/${id_}/delete/`, requestOptions)
        window.location.reload(false);
        
    }


    function confirmDelete(){
        
        if(delete_==true){
            {handleScroll()}
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

    function handleButtonRender() {
        if(user !==''){
            return(
                <Button variant="contained" color="primary" onClick={submitButton} style={{width:'15%', marginLeft:'5%',}}>Komento</Button>
            )
        }else{
            return(
                <>
                    <Button variant="contained" color="primary" href={'/login'} style={{width:'15%', marginLeft:'5%',}}>Komento</Button>
                </>
            )
        }
    }


    return(
        <>
            <Suspense fallback={renderLoader()}>
                <Navbar/>
            </Suspense>
            
            {confirmDelete()}

            <Card className="detail">
                <Suspense fallback={renderLoader()}>
                    <CardMedia style={{aspectRatio: '16/9', width: '100%', objectFit:'cover'}} image={details.photo}/>
                </Suspense>
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
                                // if it's the right post
                                // not the way to do it, because there can be an overwhelming amount of comments
                                // should be an api call with a filter
                                if(comments.post == details.id){
                                    if(userID == comments.user){
                                        return(
                                            <>
                                            <Card>
                                                <CardHeader
                                                    title={comments.comment}
                                                    subheader={`User#${comments.user} - ${comments.date}`}
                                                    avatar={<Button onClick={deleteComment.bind(this, comments.id)}><DeleteIcon/></Button>}
                                                />
                                            </Card>
                                            <br/>
                                        </>);
                                    }else{
                                        return(
                                            <>
                                            <Card>
                                                <CardHeader
                                                    title={comments.comment}
                                                    subheader={`User#${comments.user} - ${comments.date}`}
                                                    avatar={<InsertCommentIcon/>}
                                                />
                                            </Card>
                                            <br/>
                                        </>);
                                    }
                                    
                                }  

            })}

                    <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'row'}}>
                        <TextField id="standard-basic" label="Shtoni nje koment" style={{width:'80%'}} onChange={commentInputHandler}/>
                        {handleButtonRender()}
                    </form>
                            
                            
                    </CardContent>
                </Card>
        </>
    );

}

export default React.memo(PostDetail);
  