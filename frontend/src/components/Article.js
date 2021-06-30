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
      maxWidth: 400,
    },
    media: {
        aspectRatio:'16/9',
        minHeight: '90px',
        height:'12%',

    },
  });


function Article(props) {


    const classes = useStyles();

    return (
        <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.author} - {props.date}
                        <br/>
                        {props.content.slice(0, 150)}
                    </Typography>
                </CardContent>
        </CardActionArea>
    </Card>
    </div>
        );
    

  }

export default Article;
  