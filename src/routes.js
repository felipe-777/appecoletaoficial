import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



//importar a paginas
import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const Routes = () =>{
    return(
        <NavigationContainer> 
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Points" component={Points}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Routes;