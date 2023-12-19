import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

// Replace these with actual tattoo salon locations in Copenhagen
const tattooSalons = [
    { id: '1', latitude: 55.677580, longitude: 12.575450, title: 'Copenhagen Body Extremes', description: 'Nørregade 47, 1165 København' },
    { id: '2', latitude: 55.690610, longitude: 12.557880, title: 'Mikstattoo', description: 'Vesterbro 19, 1620 København' },
    { id: '3', latitude: 55.675940, longitude: 12.565530, title: 'Royal Tattoo', description: 'Nytorv 19, 3000 Helsingør' },
    { id: '4', latitude: 55.682760, longitude: 12.559670, title: 'Skind og Ben', description: 'Istedgade 124, 1650 København' },
    { id: '5', latitude: 55.669050, longitude: 12.549390, title: 'Iron & Ink Tattoo Studio', description: 'Flæsketorvet 68, 1711 København' },
];


const LocationMap = () => {
    const [hasLocationPermission, setHasLocationPermission] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);

    const getLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Tilladelse til adgang til placering blev nægtet');
            return;
        }
        setHasLocationPermission(true);
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
    };

    useEffect(() => {
        getLocationPermission();
    }, []);

    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                latitude: 55.6761, // Latitude for Copenhagen
                longitude: 12.5683, // Longitude for Copenhagen
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {tattooSalons.map(salon => (
                <Marker
                    key={salon.id}
                    coordinate={{ latitude: salon.latitude, longitude: salon.longitude }}
                    title={salon.title}
                    description={salon.description}
                />
            ))}
            {currentLocation && (
                <Marker
                    coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
                    title="Din Position"
                    description="Her er du lige nu"
                />
            )}
        </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      flex: 1
    }
});

export default LocationMap;
