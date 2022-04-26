import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
const MealList = (props) => {
  const renderMealItem = (itemData) => {
    //console.log(itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          // props.navigation.navigate({
          //   routeName: "MealDetail",
          //   params: {
          //     mealId: itemData.item.id,
          //   },
          // });
          props.navigation.navigate("MealDetail", {
            itemId: itemData.item.id,
            otherParam: "anything you want here",
            name: itemData.item.title,
            // title: "proveri",
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
