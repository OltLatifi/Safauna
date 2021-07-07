import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://streho.pythonanywhere.com/">
        Nje shtepi per kafshet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
            <div  style={{display: 'flex', flexDirection:'row'}}>
                <Typography variant="body1">
                    Platforme e decentralizuar per strehimin e kafsheve ne Kosove. 
                </Typography>
                <div style={{margin:'0 2%'}}>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <a href="https://github.com/OltLatifi/Safauna" target="_blank"><GitHubIcon/></a>
                </div>
                
                
            </div>
          <Copyright />
        </Container>
      </footer>
  );
}
