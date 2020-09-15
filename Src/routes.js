import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from  './pages/Home/Home-page'

const Appstack = createStackNavigator();



export default function Routes() {
    return(
        <NavigationContainer >
            <Appstack.Navigator initialRouteName="Home" screenOptions = {{headerShow: false}} >
                <Appstack.Screen name="Home" component={Home} />
            </Appstack.Navigator>
             
        </NavigationContainer>

    )
}