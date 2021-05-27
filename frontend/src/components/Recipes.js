import React, { Component } from 'react';
// import '../../static/css/index.css'

function Recipes(props) {

    function showTime(){
        // if its not null
        if(props.time){
            return(
                <p className="text">Takes {props.time} minutes</p>
            );
        }
    }
    function showCalories(){
        if(props.calories){
            return(
                <p className="text">{props.calories} calories</p>
            );
        }
    }
    function showServing(){
        if(props.serving){
            return(
                <p className="text">Serving size: {props.serving} grams</p>
            );
        }
    }


    return (
        <div>
            <h1>{props.name}</h1>
            
            <p className="text">Ingredients: {props.ingredients}</p>
            <p className="text">Instructions: {props.instructions}</p>

            <p></p>
            
            {showTime()}
            {showCalories()}
            {showServing()}
            
            
            
        </div>
        );
    

  }

export default Recipes;
  