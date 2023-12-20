import React, { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { SearchBar } from 'react-native-elements';
import GlobalStyles from '../globalStyling/GlobalStyles';

const columnCount = 2;

// Firebase configuration
const firebaseConfigStorage = {
  apiKey: "AIzaSyCK6BHAOLDMY-8-CHT_LWQYbMLIkfPxHho",
  authDomain: "database-6fbce.firebaseapp.com",
  databaseURL: "https://database-6fbce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "database-6fbce",
  storageBucket: "database-6fbce.appspot.com",
  messagingSenderId: "718630363488",
  appId: "1:718630363488:web:ee7efb7f65d1092d837e05"
};


function InspirationScreen() {
  // Initialize Firebase
  const firebaseAppStorage = initializeApp(firebaseConfigStorage, 'storage');
  const db = getDatabase(firebaseAppStorage);

  // State to store images and search query
  const [imagesArr, setImagesArr] = useState([]);
  const [search, setSearch] = useState('');

  // Effect to fetch images from Firebase on component mount
  useEffect(() => {
    const imagesRef = ref(db, 'Images');

    // Function to handle data snapshot from Firebase
    const handleData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array and reverse for latest first
        const images = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        setImagesArr(images.reverse());
      }
    };

    // Listen for value changes at 'Images' node in Firebase
    const unsubscribe = onValue(imagesRef, handleData);

    // Cleanup function to unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, [db]);

  // Function to render each image item
  const renderItem = ({ item }) => (
    <View style={GlobalStyles.imageContainer}>
      <Image source={{ uri: item.imageURI }} style={GlobalStyles.image} />
    </View>
  );

  return (
    <View style={GlobalStyles.inspirationContainer}>
      {/* Search bar to filter images by tags */}
      <SearchBar
        placeholder="Search..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        containerStyle={GlobalStyles.searchBarContainerInspiration}
        inputContainerStyle={GlobalStyles.searchBarInputContainerInspiration}
      />

      {/* FlatList to display images in a grid */}
      <FlatList
        data={imagesArr.filter((item) =>
          item.tags && item.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={columnCount}
        contentContainerStyle={GlobalStyles.InspirationContainer}
      />
    </View>
  );
}

export default InspirationScreen;
