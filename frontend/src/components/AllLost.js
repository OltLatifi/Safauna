import React, { useState, useEffect, lazy, Suspense  } from 'react';

import Typography from '@material-ui/core/Typography';



const Navbar = lazy(() => import('./Navbar'));
const Post = lazy(() => import('./Post'));

const renderLoader = () => <p>Loading</p>;

function AllLost() {
    const[data, setData] = useState([]);

    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch('/api/all-lost/')
        .then((response) =>{
            return response.json();
        })
        .then((json) =>{setData(json)});
    }

    return (
        <>
        <Suspense fallback={renderLoader()}>
        <Navbar/>
        <br/>
        <div style={{marginLeft: '2%'}}>
        <Typography variant="h4" component="h5" style={{marginLeft: '1%'}}>
            Te gjitha kafshet e humbura
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
        </div>



    
        </Suspense>
        
        </>
        );

  }

export default AllLost;
  