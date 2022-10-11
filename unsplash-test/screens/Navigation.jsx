import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import HomeScreen from "./HomeScreen";
import Photo from "./Photo";


import store from '../store';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Photos list'}}/>
                    <Stack.Screen name="Photo" component={Photo} options={{ title: 'Photo'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
        
    );
}