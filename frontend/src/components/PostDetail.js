import React, { useState, useEffect  } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';

import Navbar from './Navbar';


function PostDetail(props) {

    const [delete_, setDelete] = useState(false);
    const id = props.match.params.id;
    const[details, setDetails] = useState([]);

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

    function getData() {
        fetch(`/api/posts/${id}/`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json))
        .catch((error) =>console.log(error));
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
        console.log("here;");
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


    return (
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
                            <Button variant="contained" color="default" onClick={() => setDelete(true)}>Fshij</Button>
                            
                    </CardContent>
                </Card>
        </>
        );

  }

export default PostDetail;
  