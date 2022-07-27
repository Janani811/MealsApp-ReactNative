// import { useContext } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites.context";

function FavoriteScreens() {
  // const favoritesMealContext = useContext(FavoritesContext);
  const favoriteMealsId = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoritesMealContext?.ids?.includes(meal.id)
    favoriteMealsId.includes(meal?.id)
  );

  if (favoriteMeals?.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textContent}>You have no Favorite Meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreens;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
