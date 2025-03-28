import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeStack from './HomeStack';
import TrendingStack from './TrendingStack';
import Swap from '../../screens/Main/Swap';
import Discover from '../../screens/Main/Discover';

export type MainTabsParamList = {
    HomeTab: undefined;
    TrendingTab: undefined;
    DiscoverTab: undefined;
    SwapTab: undefined
}
const MainTabs = () => {
    const Tabs = createBottomTabNavigator<MainTabsParamList>()
    return (
        <Tabs.Navigator initialRouteName='HomeTab' screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='HomeTab' component={HomeStack} options={{ title: "Home" }} />
            <Tabs.Screen name='TrendingTab' component={TrendingStack} options={{ title: "Trending" }} />
            <Tabs.Screen name='SwapTab' component={Swap} options={{ title: "Swap" }} />
            <Tabs.Screen name='DiscoverTab' component={Discover} options={{ title: "Discover" }} />
        </Tabs.Navigator>
    )
}

export default MainTabs