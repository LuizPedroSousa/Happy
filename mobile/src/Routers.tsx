import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrphanageMap from './Pages/OrphanageMap';
import OrphanageMarker from './Pages/CreateOrphanage/OrphanageMarker';
import OrphanageData from './Pages/CreateOrphanage/OrphanageData';
import ListOrphanage from './Pages/ListOrphanage';
import OnBoarding from './Pages/OnBoarding';
import { AsyncStorage } from 'react-native';
import OrphanageRegistered from './Pages/CreateOrphanage/OrphanageRegistered';

const Routers: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator();
    const [hasOnBoarded, setHasOnBoarded] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('onBoarding').then(value => {
            setHasOnBoarded(value ? value : 'false');
        });
    }, []);

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={'Registered'}
            >
                <Screen
                    name='OnBoarding'
                    options={{ headerShown: false }}
                    component={OnBoarding}
                />
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
                    name='Registered'
                    options={{ headerShown: false }}
                    component={OrphanageRegistered}
                />
                <Screen
                    name='CreateOrphanage/data'
                    options={{ headerShown: false }}
                    component={OrphanageData}
                />
            </Navigator>
        </NavigationContainer >
    );
}

export default Routers;