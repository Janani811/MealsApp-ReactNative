import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 16,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 13,
  },
});
