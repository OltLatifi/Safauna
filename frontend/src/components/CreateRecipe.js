import React, { useState, useEffect  } from 'react';


function CreateRecipe() {

    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch('/api/create-recipe/')
        .then((response) =>{
            return response.json();
        })
        .then(json =>setData(json));
    }
    
    console.log(data);
    return (
        <>
            {data.map(recipes => <Recipes
            name={recipes.name}
            calories={recipes.calories}
            instructions={recipes.instructions}
            ingredients={recipes.ingredients}
            />)}
        </>
        );

  }

export default Home;
  