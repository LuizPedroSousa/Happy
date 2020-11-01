import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrphanageMap from './Pages/OrphanageMap';
import OrphanageMarker from './Pages/CreateOrphanage/OrphanageMarker';
import OrphanageData from './Pages/CreateOrphanage/OrphanageData';
import ListOrphanage from './Pages/ListOrphanage';

const Routers: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='OrphanageMap'
                    options={{ headerShown: false }}
                    component={OrphanageMap}
                />
                <Screen
                    name='ListOrphanage'
                    options={{ headerShown: false }}
                    component={ListOrphanage}
                />
                <Screen
                    name='CreateOrphanage/marker'
                    options={{ headerShown: false }}
                    component={OrphanageMarker}
                />
                <Screen
                    name='CreateOrphanage/data'
                    options={{ headerShown: false }}
                    component={OrphanageData}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routers;