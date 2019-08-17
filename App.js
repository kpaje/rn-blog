import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator(
	{
		Index: IndexScreen
	},
	{
		initialRouteName: "Index",
		defaultNavigationOptions: {
			title: "Blog"
		}
	}
);

export default createAppContainer(navigator);
