import { FlatList } from "react-native";
import CategoryGrid from "../components/CategoryGrid";

import { CATEGORIES } from "../data/dummy-data";

function CatergoriesScreens({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CatergoriesScreens;
