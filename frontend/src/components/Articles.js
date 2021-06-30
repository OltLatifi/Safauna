import React, { useState, useEffect  } from 'react';

import Typography from '@material-ui/core/Typography';

import Navbar from "./Navbar";
import Article from './Article';


function Articles() {
    const[data, setData] = useState([]);

    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch('/api/articles/')
        .then((response) =>{
            return response.json();
        })
        .then((json) =>{setData(json)});
    }
    
    console.table(data);
    console.log(data.photo);
    return (
        <>
        <Navbar/>
        <br/>
        <Typography variant="h4" component="h4" className="Home">
            Te gjitha artikujt
        </Typography>
        <div className="Home">
            {data.map((articles, index) =><a href={'/articles/' + articles.id} style={{margin:'2% 1%'}}><Article
            title={articles.title}
            content={articles.content}
            date={articles.date}
            author={articles.author}
            image={articles.photo}
            /></a>)}
        </div>

        </>
        );

  }

export default Articles;
  