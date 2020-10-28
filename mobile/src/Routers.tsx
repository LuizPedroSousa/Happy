import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateOrphanage from './Pages/CreateOrphanage';
import OrphanageMap from './Pages/OrphanageMap';
const Routers: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="OrphanageMap"
                    options={{ headerShown: false }}
                    component={OrphanageMap}
                />
                <Screen name="Adicione" component={CreateOrphanage} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routers;