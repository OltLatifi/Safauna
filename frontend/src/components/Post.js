import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShowMoreText from "react-show-more-text";



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

    function gilaniNetwork(){
        if(props.name === "Gilani Network"){
            return(
                <>
                <Typography variant="body2" color="textSecondary" component="p" style={{paddingBottom:7}}>
                    <ShowMoreText
                    /* Default options */
                    lines={1}
                    more="Lexo më shumë"
                    less="Lexo më pak"
                    expanded={false}
                    width={200}
                    truncatedEndingComponent={"... "}
                >
                    Gilani Network është platformë e krijuar nga një grup joformal i shoqërisë civile në Gjilan, me qëllim të ndërlidhjes së qytetarëve mes vete.
                </ShowMoreText>
                </Typography>
                </>
            )
        } else{
            return(
                <>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.features}
                    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                        <br/>Qyteti: {props.city}<br/>{showReward()}
                    </Typography>
                    </>
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
                    
                    {gilaniNetwork()}
                </CardContent>
        </CardActionArea>
    </Card>
    </div>
        );
    

  }

export default Post;
  