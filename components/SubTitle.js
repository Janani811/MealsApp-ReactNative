import { View, Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#f7ece1",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  subTitleContainer: {
    marginVertical: 8,
    marginHorizontal: 6,
    borderBottomColor: "#f7ece1",
    borderBottomWidth: 3,
    padding: 6,
  },
});
