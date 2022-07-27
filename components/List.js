import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 4,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#cac4ce",
    borderRadius: 8,
  },
  itemText: {
    color: "#0d1b2a",
    textAlign: "center",
    fontSize: 16,
    padding: 4,
  },
});
