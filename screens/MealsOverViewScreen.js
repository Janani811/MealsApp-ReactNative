import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayMeals} />;
}

export default MealsOverViewScreen;