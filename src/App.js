import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => setMealsData(res.data.meals));
  });

  return (
    <div className="app-container">
      <h1>Cooking App</h1>
      <input type="text" placeholder="Type the name of a food" />
      <div className="cooking-container">
        {mealsData.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
