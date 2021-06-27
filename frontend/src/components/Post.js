import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
        aspectRatio:'16/9',
        minHeight: '90px',
        height:'12%',

    },
  });


function Post(props) {

    function showReward(){
        if(props.reward){
            return(
                <p className="text">Shperblimi: {props.reward} euro</p>
            );
        } else{
            return(
                <p className="text">Pa shperblim</p>
            );
        }
    }


    const classes = useStyles();

    return (
        <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.features}<br/>Qyteti: {props.city}<br/>{showReward()}
                    </Typography>
                </CardContent>
        </CardActionArea>
    </Card>
    </div>
        );
    

  }

export default Post;
  