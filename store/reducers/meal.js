import { MEALS } from "../../data/DummyData";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/Meals";
const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducers = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        //console.log(state.meals);
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        //console.log(meal);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.IsGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegeterian && !meal.isVegeterian) {
          return false;
        }
        return true;
      });
      //console.log(updatedFilteredMeals);
      return { ...state, filteredMeals: updatedFilteredMeals };
  }
  return state;
};

export default mealsReducers;
