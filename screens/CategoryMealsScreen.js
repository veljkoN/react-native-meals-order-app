import React from "react";
import { CATEGORIES } from "../data/DummyData";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = (props) => {
  const { itemId } = props.route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    (meal) => meal.cateogryIds.indexOf(itemId) >= 0
  );
  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, maybe check your filters?</Text>
      </View>
    );
  }
  return <MealList listData={displayMeals} navigation={props.navigation} />; //have to be passed - it cant be used in nested component, only direct
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const { itemId } = navigationData.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === itemId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
