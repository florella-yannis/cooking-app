import React from 'react';

// au lieu de taper props on ecrit directement meal
const Card = ({meal}) => {
    return (
        <div className="meal-carrd">

            <h2>{meal.strMeal}</h2>
            <p> Origin : {meal.strArea}</p>
        </div>
    );
};

export default Card;