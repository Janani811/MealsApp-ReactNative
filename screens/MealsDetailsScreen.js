import { useLayoutEffect } from "react";
// import { useContext, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites.context";
import { addFavorite, removeFavorite } from "./../store/redux/favorites";

function MealDetailsScreen({ route, navigation }) {
  // const favoritesMealContext = useContext(FavoritesContext);
  const favoriteMealsId = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealsId = route.params.mealsId;
  const selectedMeals = MEALS.find((meals) => meals.id === mealsId);

  // const isFavoriteMeals = favoritesMealContext?.ids?.includes(mealsId);
  const isFavoriteMeals = favoriteMealsId?.includes(mealsId);

  function changeFavoriteMealStatus() {
    if (isFavoriteMeals) {
      // favoritesMealContext?.removeFavorites(mealsId);
      dispatch(removeFavorite({ id: mealsId }));
    } else {
      // favoritesMealContext?.addFavorites(mealsId);
      dispatch(addFavorite({ id: mealsId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavoriteMeals ? "star" : "star-outline"}
            onPress={changeFavoriteMealStatus}
            color="white"
            size={24}
          />
        );
      },
    });
  }, [navigation, changeFavoriteMealStatus]);

  return (
    <ScrollView style={styles.mainContainer}>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>
        Meals Details Screen {selectedMeals.title}
      </Text>
      <MealDetails
        duration={selectedMeals.duration}
        affordability={selectedMeals.affordability}
        complexity={selectedMeals.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeals.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: { marginHorizontal: 8, marginBottom: 10 },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 16,
  },
  detailText: {
    color: "white",
    fontSize: 15,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
