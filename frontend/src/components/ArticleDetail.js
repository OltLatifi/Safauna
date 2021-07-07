import React, { useState, useEffect  } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Navbar from './Navbar';


function ArticleDetail(props) {

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
        fetch(`/api/articles/${id}/`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json))
        .catch((error) =>console.log(error));
    }




    return (
        <>
            <Navbar/>

            <Card style={{width:'60%', margin:'6% 20%'}}>
                    <CardMedia style={{aspectRatio: '16/9', width: '100%', objectFit:'cover'}} image={details.photo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            {details.title}<br/>
                            <Typography variant="body1" color="textSecondary">{details.author}-{details.date}</Typography>
                        </Typography>
                            <Typography variant="body1" color="textSecondary">{details.content}</Typography>
                            <br/>
                            
                    </CardContent>
                </Card>
        </>
        );

  }

export default React.memo(ArticleDetail);
  