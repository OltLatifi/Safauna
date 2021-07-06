import React, { useState, useEffect, lazy, Suspense  } from 'react';

import Typography from '@material-ui/core/Typography';



const Navbar = lazy(() => import('./Navbar'));
const Post = lazy(() => import('./Post'));

const renderLoader = () => <p>Loading</p>;

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
        <Suspense fallback={renderLoader()}>
        <Navbar/>
        <br/>
        <div style={{marginLeft: '2%'}}>
        <Typography variant="h4" component="h5" style={{marginLeft: '1%'}}>
            <a href="/all-posts/">Te gjitha postimet</a>
        </Typography>
        <div className="Home">
            {data.slice(0,14).map((posts, index) =><a href={'/posts/' + posts.id} style={{margin:'2% 1%'}}><Post
            name={posts.name.slice(0, 21)}
            description={posts.description}
            features={posts.features.slice(0, 31)+'...'}
            city={posts.city}
            reward={posts.reward}
            image={posts.photo}
            /></a>)}
        </div>



        <br/>
        <Typography variant="h4" component="h5" style={{marginLeft: '1%'}}>
        <a href="/all-lost/">Kafshet e humbura</a>
        </Typography>
        <div className="Home">
            {data.slice(0,14).map((posts, index) =>{
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
        <Typography variant="h4" component="h5" style={{marginLeft: '1%'}}>
            <a href="/all-found/">Kafshet e gjetura</a>
        </Typography>
        <div className="Home">
            {data.slice(0,14).map((posts, index) =>{
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
        <Typography variant="h4" component="h5" style={{marginLeft: '1%'}}>
            <a href="/all-adopt/">Kafshet per adoptim</a>
        </Typography>
        <div className="Home">
            {data.slice(0,14).map((posts, index) =>{
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
        <Typography variant="h4" component="h5" style={{marginLeft: '1%'}}>
            <a href="/all-reward/">Postimet me shperblime</a>            
        </Typography>
        <div className="Home">
            {data.slice(0,14).map((posts, index) =>{
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
        </div>
        </Suspense>
        
        </>
        );

  }

export default Home;
  