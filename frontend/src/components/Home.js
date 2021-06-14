import React, { useState, useEffect  } from 'react';
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
        .then(json =>setData(json));
    }
    
    console.table(data);
    console.log(data.photo);
    return (
        <>
        <h1 className="header">Safauna</h1>
        <div className="Home">
            {data.map((posts, index) =><a href={'/posts/' + posts.id} ><Post
            name={posts.name.slice(0, 21)}
            description={posts.description}
            features={posts.features.slice(0, 31)+'...'}
            city={posts.city}
            reward={posts.reward}
            image={posts.photo}
            /></a>)}
            {/* slice is used to show less, more is going to be seen in detailview */}
        </div>
        </>
        );

  }

export default Home;
  