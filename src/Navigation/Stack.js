import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Cart from '../Screens/Cart';
import { Checkout } from '../Screens/Checkout';
import Thankyou from '../Components/Thankyou';
import Profile from '../Screens/Profile';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Welcome_Screen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
            <Stack.Screen name="Thankyou" component={Thankyou} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        </Stack.Navigator>

    );
}

export default Navigation;