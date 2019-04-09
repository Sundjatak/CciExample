import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./views/HomeScreen";
import CategoriesScreen from "./views/CategoriesScreen";
import CategoryScreen from "./views/CategoryScreen";

/**
 * Creates a stack navigator with screens
 *
 * @type {"react-navigation".NavigationContainer}
 */
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Category: CategoryScreen
}, {
    initialRouteName: "Home",
});

export default createAppContainer(AppNavigator);