import React, { useState, useEffect  } from 'react';

function RecipeDetail(props) {

    const id = props.match.params.id;
    const[details, setDetails] = useState([]);

    // note to self: useEffect is used to tell react that it needs to do something after render
    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch(`/api/recipe/${id}`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json));
    }


    return (
        <>
            <h1 className="header">{details.name}</h1>
           
            <p className="normal_text"> <span>Instructions:<br/></span>{details.instructions}</p>
            <p className="normal_text"><span>Ingredients:<br/></span>{details.ingredients}</p>

        </>
        );

  }

export default RecipeDetail;
  