import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import GlobalStyles from "../globalStyling/GlobalStyles";

function ProfileScreen() {
    return (
        <ScrollView style={GlobalStyles.container}>
            <View style={GlobalStyles.profileHeaderContainer}>
                <Image
                    source={require('../assets/stockimage.jpeg')} // Replace with actual path to profile image
                    style={GlobalStyles.profileImage}
                />
                <Text style={GlobalStyles.profileName}>John Corner</Text>
            </View>

            <View style={GlobalStyles.profileSection}>
                <Text style={GlobalStyles.profileSectionTitle}>Dashboard</Text>
                <View style={GlobalStyles.profileDashboardDetails}>
                    <Text style={GlobalStyles.profileDashboardText}>Balance: $20,000</Text>
                    <Text style={GlobalStyles.profileDashboardText}>Points: 452.5</Text>
                </View>
            </View>

            <View style={GlobalStyles.profileSection}>
                <Text style={GlobalStyles.profileSectionTitle}>Settings</Text>
                <TouchableOpacity style={GlobalStyles.profileListItem}>
                    <Text style={GlobalStyles.profileListItemText}>Email Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.profileListItem}>
                    <Text style={GlobalStyles.profileListItemText}>Fingerprint</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.profileListItem}>
                    <Text style={GlobalStyles.profileListItemText}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.profileListItem}>
                    <Text style={GlobalStyles.profileListItemText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;
