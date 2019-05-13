import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./views/HomeScreen";
import CategoriesScreen from "./views/CategoriesScreen";
import CategoryScreen from "./views/CategoryScreen";
import JokesScreen from "./views/JokesScreen";

/**
 * Creates a stack navigator with screens
 *
 * @type {"react-navigation".NavigationContainer}
 */
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Category: CategoryScreen,
    Jokes: JokesScreen
}, {
    initialRouteName: "Home",
});

export default createAppContainer(AppNavigator);