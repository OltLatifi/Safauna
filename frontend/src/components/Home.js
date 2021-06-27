import React, { useState, useEffect  } from 'react';

import Typography from '@material-ui/core/Typography';

import Navbar from "./Navbar";
import Post from './Post';


function Home() {
    const[data, setData] = useState([]);

    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch('/api/posts/')
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
            Te gjitha postimet
        </Typography>
        <div className="Home">
            {data.map((posts, index) =><a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
            name={posts.name.slice(0, 21)}
            description={posts.description}
            features={posts.features.slice(0, 31)+'...'}
            city={posts.city}
            reward={posts.reward}
            image={posts.photo}
            /></a>)}
        </div>



        <br/>
        <Typography variant="h4" component="h4" className="Home">
            Kafshet e humbura
        </Typography>
        <div className="Home">
            {data.map((posts, index) =>{
                if(posts.category==="Humbje"){
                    return(
                    <a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
                        name={posts.name.slice(0, 21)}
                        description={posts.description}
                        features={posts.features.slice(0, 31)+'...'}
                        city={posts.city}
                        reward={posts.reward}
                        image={posts.photo}
                    /></a>);
                }
            })}
        </div>


        <br/>
        <Typography variant="h4" component="h4" className="Home">
            Kafshet e gjetura
        </Typography>
        <div className="Home">
            {data.map((posts, index) =>{
                if(posts.category==="Gjetje"){
                    return(
                    <a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
                        name={posts.name.slice(0, 21)}
                        description={posts.description}
                        features={posts.features.slice(0, 31)+'...'}
                        city={posts.city}
                        reward={posts.reward}
                        image={posts.photo}
                    /></a>);
                }
            })}
        </div>


        <br/>
        <Typography variant="h4" component="h4" className="Home">
            Kafshet per adoptim
        </Typography>
        <div className="Home">
            {data.map((posts, index) =>{
                if(posts.category==="Adoptim"){
                    return(
                    <a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
                        name={posts.name.slice(0, 21)}
                        description={posts.description}
                        features={posts.features.slice(0, 31)+'...'}
                        city={posts.city}
                        reward={posts.reward}
                        image={posts.photo}
                    /></a>);
                }
            })}
        </div>

        <br/>
        <Typography variant="h4" component="h4" className="Home">
            Postimet me shperblime
        </Typography>
        <div className="Home">
            {data.map((posts, index) =>{
                if(posts.reward>0){
                    return(
                    <a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
                        name={posts.name.slice(0, 21)}
                        description={posts.description}
                        features={posts.features.slice(0, 31)+'...'}
                        city={posts.city}
                        reward={posts.reward}
                        image={posts.photo}
                    /></a>);
                }
            })}
        </div>
        </>
        );

  }

export default Home;
  