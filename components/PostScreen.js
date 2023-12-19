import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Alert,
  ScrollView,
  SafeAreaView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getDatabase, ref, push } from 'firebase/database';
import { getApps, initializeApp } from "firebase/app";
import GlobalStyles from '../globalStyling/GlobalStyles';
import RNPickerSelect from 'react-native-picker-select';



const firebaseConfigStorage = {
    apiKey: "AIzaSyCK6BHAOLDMY-8-CHT_LWQYbMLIkfPxHho",
    authDomain: "database-6fbce.firebaseapp.com",
    databaseURL: "https://database-6fbce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "database-6fbce",
    storageBucket: "database-6fbce.appspot.com",
    messagingSenderId: "718630363488",
    appId: "1:718630363488:web:ee7efb7f65d1092d837e05"
  };
  

  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  
  //const dbStorage = firebaseAppStorage.database();

function PostScreen() {
        // Initialize other firebase products here
const firebaseAppStorage = initializeApp(firebaseConfigStorage, 'storage');

  const db = getDatabase(firebaseAppStorage);

  const initialState = {
    imageURI: null,
    selectedTag: null, // New state for selected tag

  };
  const [newImage, setNewImage] = useState(initialState);
  const [imagesArr, setImagesArr] = useState([]);

  const changeImageURI = (uri) => {
    setNewImage({ ...newImage, imageURI: uri });
  };

  const handleImageUpload = async () => {
    try {
      if (!newImage.imageURI || !newImage.selectedTag) {
        return Alert.alert('Please select an image and a tag to upload.');
      }
  
      const imagesRef = ref(db, '/Images/');
  
      const newImageData = {
        imageURI: newImage.imageURI,
        tags: [newImage.selectedTag], // Store tags in an array
      };
  
      await push(imagesRef, newImageData);
  
      setImagesArr([{ uri: newImage.imageURI, tags: [newImage.selectedTag] }, ...imagesArr]);
  
      setNewImage(initialState);
      Alert.alert('Image uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error uploading image');
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setNewImage({ ...newImage, imageURI: result.uri });
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.PostContainer}>
      <ScrollView>
        <View style={GlobalStyles.row}>
          <Text style={GlobalStyles.label}>Image</Text>
          <Button title="Select Image" onPress={pickImage} />
        </View>

        {newImage.imageURI && (
          <View style={GlobalStyles.PostImageContainer}>
            <Image source={{ uri: newImage.imageURI }} style={GlobalStyles.PostImage} />
          </View>
        )}

        <View style={GlobalStyles.row}>
          <Text style={GlobalStyles.label}>Tag</Text>
          <RNPickerSelect
            onValueChange={(value) => setNewImage({ ...newImage, selectedTag: value })}
            items={[
              { label: 'Animals', value: 'animals' },
              { label: 'Color', value: 'color' },
              // Add more tags as needed
            ]}
          />
        </View>

        <Button title="Upload Image" onPress={handleImageUpload} />
      </ScrollView>

      
    </SafeAreaView>
  );
}

export default PostScreen;
 