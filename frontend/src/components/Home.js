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
            {data.map((recipes, index) =><a href={'/recipe/' + recipes.id} className="r_container"><Recipes
            name={recipes.name.slice(0, 21)}
            calories={recipes.calories}
            instructions={recipes.instructions.slice(0, 31)+'...'}
            ingredients={recipes.ingredients.slice(0, 31)+'...'}
            time={recipes.time_to_make}
            /></a>)}
            {/* slice is used to show less, more is going to be seen in detailview */}
        </div>
        </>
        );

  }

export default Home;
  