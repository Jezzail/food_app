import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/meals.json`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      const loadeddMeals = [];

      for (const key in data) {
        loadeddMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          image: data[key].image,
        });
      }
      setMeals(loadeddMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {error !== null && <p className={classes.MealsError}>ERROR: {error}</p>}
        {isLoading && <p className={classes.MealsLoading}>LOADING</p>}
        {mealsList.length !== 0 && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
