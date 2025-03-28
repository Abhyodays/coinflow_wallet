import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CreatePasscode from '../screens/Auth/CreatePasscode';
import Onboarding from '../screens/Auth/Onboarding';
import WalletSetup from '../screens/Auth/WalletSetup';
import { useTheme } from '../contexts/ThemeContext';

export type AuthStackParamList = {
    CreatePasscode: undefined;
    WalletSetup: undefined;
    Onboarding: undefined
}
const AuthStack = () => {
    const Stack = createStackNavigator<AuthStackParamList>();
    const { theme } = useTheme();
    return (
        <Stack.Navigator initialRouteName='Onboarding' >
            <Stack.Screen name='CreatePasscode' component={CreatePasscode}
                options={
                    {
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                            backgroundColor: theme.colors.background.primary
                        },
                        headerTitle: '',
                        headerTintColor: theme.colors.text.secondary
                    }
                }
            />
            <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name='WalletSetup' component={WalletSetup} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthStack;
