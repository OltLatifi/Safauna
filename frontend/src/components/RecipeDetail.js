import React, { useState, useEffect  } from 'react';

function RecipeDetail(props) {


    return (
        <>
            <h1 className="header">{props.match.params.id}</h1>
        </>
        );

  }

export default RecipeDetail;
  