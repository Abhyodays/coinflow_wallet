import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Trending from '../../screens/Main/Trending';
import TokenStats from '../../screens/Main/TokenStats';

export type TrendingStackParamList = {
    Trending: undefined;
    TokenStats: undefined
}
const TrendingStack = () => {
    const Stack = createStackNavigator<TrendingStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name='TokenStats' component={TokenStats} />
            <Stack.Screen name='Trending' component={Trending} />
        </Stack.Navigator>
    )
}

export default TrendingStack