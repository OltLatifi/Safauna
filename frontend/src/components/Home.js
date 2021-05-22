import React, { useState, useEffect  } from 'react';
import Recipes from './Recipes';

function Home() {
    const[data, setData] = useState([]);

    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch('/api/recipe/')
        .then((response) =>{
            return response.json();
        })
        .then(json =>setData(json));
    }
    
    console.log(data);
    return (
        <>
        <h1 className="header">Recipes & stuff</h1>
        <div className="Home">
            {data.map((recipes, index) =><Recipes
            name={recipes.name}
            calories={recipes.calories}
            instructions={recipes.instructions}
            ingredients={recipes.ingredients}
            time={recipes.time_to_make}
            />)}
        </div>
        </>
        );

  }

export default Home;
  