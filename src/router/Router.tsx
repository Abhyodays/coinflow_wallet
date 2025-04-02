import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainTabs from './Main/MainTabs';
import AuthStack from './AuthStack';
import SecurityCheck from '../screens/SecurityCheck/SecurityCheck';
import Onboarding from '../screens/Auth/Onboarding';
import { useAuth } from '../contexts/AuthContext';

const Router = () => {
    const hasWallet = false;
    const { user } = useAuth();
    return (
        <NavigationContainer>
            {
                hasWallet ?
                    user ?
                        <MainTabs />
                        : <SecurityCheck />
                    : <AuthStack />

            }
        </NavigationContainer>
    )
}

export default Router