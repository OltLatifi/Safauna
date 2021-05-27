import React, { useState, useEffect  } from 'react';
import Recipes from './Recipes';

function ComposeRecipe() {

    const[recipeName, setRecipeName] = useState('');
    const[calories, setCalories] = useState(null);
    const[servingSize, setServingSize] = useState(null);
    const[time, setTime] = useState(null);
    const[instructions, setInstructions] = useState('');
    const[ingredients, setIngredients] = useState('');

    function recipeInputHandler(e){
        setRecipeName(e.target.value);
    }

    function calorieInputHandler(e){
        setCalories(e.target.value);
    }

    function servingInputHandler(e){
        setServingSize(e.target.value);
    }

    function timeInputHandler(e){
        setTime(e.target.value);
    }

    function instructionsInputHandler(e){
        setInstructions(e.target.value);
    }

    function ingredientsInputHandler(e){
        setIngredients(e.target.value);
    }

    function buttonPressed(){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json",
           },
            body: JSON.stringify({
                name: recipeName,
                calories: calories,
                instructions: instructions,
                ingredients: ingredients,
                time_to_make: time,
            })
        };
        fetch("/api/create-recipe/", requestOptions)
        .then((response) => response.json());
    }
    

    return (
        <>
            <form>
                <input type="text" onChange={recipeInputHandler} placeholder="Recipe name"/>
                <input type="number" onChange={calorieInputHandler} placeholder="Calories"/>
                <input type="number" onChange={timeInputHandler} placeholder="Time to make"/>
                <input type="number" onChange={servingInputHandler} placeholder="Serving size"/>
                <textarea placeholder="Instructions" rows="10" cols="30" onChange={instructionsInputHandler} />
                <textarea placeholder="Ingredients" rows="10" cols="30" onChange={ingredientsInputHandler} />
                <input type="submit" onClick={buttonPressed} value="Submit" />
            </form>

            Preview:
            <div className="r_container">
            <Recipes
                
                name={recipeName}
                calories={calories}
                serving={servingSize}
                instructions={instructions}
                ingredients={ingredients} 
                time={time} />
            </div>
        </>
        );

  }

export default ComposeRecipe;
  