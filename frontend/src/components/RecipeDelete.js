import React, { useState, useEffect  } from 'react';

function RecipeDelete(props) {

    const id = props.match.params.id;

    // note to self: useEffect is used to tell react that it needs to do something after render
    useEffect(()=>{
        deleteData();

        }, []
    );

    function deleteData() {
        fetch(`/api/recipe/${id}/delete`)
        .then((response) =>{
            return response.json();
        })
        .catch((error) =>console.log(error));
    }


    return (
        <>
            <h1 className="header">It's deleted already</h1>
        </>
        );
  }

export default RecipeDelete;
  