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


function PostDetail(props) {

    const id = props.match.params.id;
    const[details, setDetails] = useState([]);

    // note to self: useEffect is used to tell react that it needs to do something after render
    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch(`/api/posts/${id}/`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json))
        .catch((error) =>console.log(error));
    }
    console.table(details);


    return (
        <>
            <Card style={{width:'50%', margin:'2% 25%'}}>
            <CardActionArea>
                <CardMedia style={{aspectRatio: '16/9', width: '100%', objectFit:'cover'}} image={details.photo}/>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="h2">
                        {details.name}
                    </Typography>
                        <Typography variant="body1" color="textSecondary">💵Shperblimi: {details.reward} euro</Typography>
                        <Typography variant="body2" color="textSecondary"><CallTwoToneIcon/>Telefoni: {details.phone}</Typography>
                        <Typography variant="body2" color="textSecondary"><CategoryTwoToneIcon/>Kategoria: {details.category}</Typography>
                        <br/><br/>
                        <Typography variant="h6" component="p">🌆Qyteti: {details.city}</Typography>
                        <Typography variant="h6" component="p">🐶Raca: {details.description}</Typography>
                        <br/>
                        <Typography variant="h5" component="p"><BookTwoToneIcon/> Tiparet dalluese: {details.features}</Typography>
                        <Typography variant="h5" component="p"><DescriptionTwoToneIcon/>Pershkrimi: {details.description}</Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            
        </>
        );

  }

export default PostDetail;
  