import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsId, setFavoriteMealsId] = useState([]);

  function addFavorites(id) {
    setFavoriteMealsId((currentFavoritesId) => [...currentFavoritesId, id]);
  }

  function removeFavorites(id) {
    setFavoriteMealsId((currentFavoritesId) =>
      currentFavoritesId.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealsId,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
