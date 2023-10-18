import React from 'react';

// au lieu de taper props on ecrit directement meal
const Card = ({meal}) => {
    return (
        <div className="meal-card">

            <h2>{meal.strMeal}</h2>
            <p> Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default Card;