import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeStack from './HomeStack';
import TrendingStack from './TrendingStack';
import Swap from '../../screens/Main/Swap';
import Discover from '../../screens/Main/Discover';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';
import { useTheme } from '../../contexts/ThemeContext';

export type MainTabsParamList = {
    HomeTab: undefined;
    TrendingTab: undefined;
    DiscoverTab: undefined;
    SwapTab: undefined
}
const MainTabs = () => {
    const Tabs = createBottomTabNavigator<MainTabsParamList>();
    const { theme } = useTheme()
    return (
        <Tabs.Navigator initialRouteName='HomeTab'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: [styles.label_style, { color: theme.colors.text.secondary }],
                tabBarStyle: styles.tab_bar
            }}>
            <Tabs.Screen name='HomeTab' component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: () => (
                        <Icon source="home-variant" size={30} />
                    )
                }} />
            <Tabs.Screen name='TrendingTab' component={TrendingStack}
                options={{
                    title: "Trending",
                    tabBarIcon: () => (
                        <Icon source="chart-line" size={30} />
                    )
                }}
            />
            <Tabs.Screen name='SwapTab' component={Swap}
                options={{
                    title: "Swap",
                    tabBarIcon: () => (
                        <Icon source="swap-horizontal" size={30} />
                    )
                }} />
            <Tabs.Screen name='DiscoverTab' component={Discover}
                options={{
                    title: "Discover",
                    tabBarIcon: () => (
                        <Icon source="compass" size={30} />
                    )
                }} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tab_bar: {
        height: 65,
        elevation: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    label_style: {
        fontSize: 13,
        fontFamily: 'Poppins-Normal'
    }
})

export default MainTabs