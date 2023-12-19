import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Animated, Image, Modal, Button, StyleSheet } from 'react-native';

// Assuming GlobalStyles is imported correctly
import GlobalStyles from '../globalStyling/GlobalStyles';

function HomeScreen() {
    // Initial states
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [tutorialStep, setTutorialStep] = useState(0);
    const [tutorialCompleted, setTutorialCompleted] = useState(false);
    const chatImage = require('../assets/chat.png');
    const inspirationImage = require('../assets/inspiration.png');
    const postImage = require('../assets/Post.png');
    const profileImage = require('../assets/Profile.png');
    const salonImage = require('../assets/salon.png');

    // Tutorial steps
    const tutorialSteps = [
        {
            title: 'Inspiration',
            content: 'Find inspiration for your next tattoo and get matched with artists you like.',
            image: inspirationImage,
          },
          {
            title: 'Profile',
            content: 'Check your balance and personal information.',
            image: profileImage,
          },
          {
            title: 'Post',
            content: 'Post your personal tattoo ideas and inspire others.',
            image: postImage,
          },
          {
            title: 'Chat',
            content: 'Talk to artists and fellow community members.',
            image: chatImage,
          },
          {
            title: 'Tattoo Salons',
            content: 'See your local tattoo salons.',
            image: salonImage,
          },
    ];

    // Start animation after the component mounts and tutorial is complete
    useEffect(() => {
        if (tutorialCompleted) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        }
    }, [fadeAnim, tutorialCompleted]);

    // Function to handle the next step in the tutorial
    const nextStep = () => {
        if (tutorialStep < tutorialSteps.length - 1) {
            setTutorialStep(tutorialStep + 1);
        } else {
            setTutorialCompleted(true);
        }
    };

    // Render the tutorial modal
    if (!tutorialCompleted) {
        return (
          <Modal
            animationType="slide"
            transparent={true}
            visible={!tutorialCompleted}
            onRequestClose={() => setTutorialCompleted(true)}
          >
            <View style={GlobalStyles.centeredView}>
              <View style={GlobalStyles.modalView}>
                <Text style={GlobalStyles.modalTitle}>{tutorialSteps[tutorialStep].title}</Text>
                <Text style={GlobalStyles.modalContent}>{tutorialSteps[tutorialStep].content}</Text>
                <Image source={tutorialSteps[tutorialStep].image} style={GlobalStyles.welcomeImage} />
                <Button title="Next" onPress={nextStep} />
              </View>
            </View>
          </Modal>
        );
      }

    // Render the animated welcome screen
    return (
        <View style={GlobalStyles.container}>
            <Animated.View 
                style={[
                    GlobalStyles.textContainer,
                    { opacity: fadeAnim }
                ]}
            >
                <Text style={GlobalStyles.title}>Welcome to Inkspiration</Text>
                <Image 
                    source={require('../assets/CuteInkIcon.png')} // Use the correct relative path
                    style={GlobalStyles.welcomeImage}
                />
            </Animated.View>
        </View>
    );
}

// Add this style to your GlobalStyles.js



export default HomeScreen;
