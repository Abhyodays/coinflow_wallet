import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Main/Home";
import Settings from "../../screens/Main/Settings";
import Search from "../../screens/Main/Search";

export type HomeStackParamList = {
    Home: undefined;
    Settings: undefined;
    Search: undefined
}
const HomeStack = () => {
    const Stack = createStackNavigator<HomeStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
}

export default HomeStack