import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainTabs from './Main/MainTabs';
import AuthStack from './AuthStack';
import SecurityCheck from '../screens/SecurityCheck/SecurityCheck';
import Onboarding from '../screens/Auth/Onboarding';

const Router = () => {
    const hasWallet = false;
    const isAuthenticated = false;
    return (
        <NavigationContainer>
            {
                hasWallet ?
                    isAuthenticated ?
                        <MainTabs />
                        : <SecurityCheck />
                    : <AuthStack />

            }
        </NavigationContainer>
    )
}

export default Router