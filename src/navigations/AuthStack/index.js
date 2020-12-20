import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/LoginScreen';
import SignupScreen from '../../screens/Auth/SignUpScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Sign Up" component={SignupScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
