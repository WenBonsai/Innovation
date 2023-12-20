import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';

function ChatScreen() {
    // State for storing the messages array
    const [messages, setMessages] = useState([]);
    // State for storing the current input text
    const [inputText, setInputText] = useState('');

    // Function to send a message
    const sendMessage = () => {
        // Check if inputText is not just empty spaces
        if (inputText.trim() !== '') {
            // Add new message to the messages array
            setMessages(previousMessages => [...previousMessages, { key: Date.now().toString(), text: inputText }]);
            // Reset input field after sending a message
            setInputText('');
        }
    };

    return (
        // KeyboardAvoidingView is used to ensure the TextInput is visible when the keyboard is up
        <KeyboardAvoidingView 
            style={GlobalStyles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Different behavior for iOS and Android
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 20} // Offset for the keyboard
        >
            {/* FlatList to render the list of messages */}
            <FlatList
                data={messages} // Data source for FlatList
                renderItem={({ item }) => (
                    // Render each message in a styled container
                    <View style={GlobalStyles.messageContainer}>
                        <Text style={GlobalStyles.messageText}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={item => item.key} // Unique key for each item
            />

            /* Container for the input field and send button */
            <View style={GlobalStyles.inputContainer}>
                {/* TextInput for typing the message */}
                <TextInput
                    style={GlobalStyles.input}
                    value={inputText}
                    onChangeText={setInputText} // Update inputText as user types
                    placeholder="Type your message here..." // Placeholder text
                />
                {/* Button to trigger sending the message */}
                <Button title="Send" onPress={sendMessage} />
            </View>
        </KeyboardAvoidingView>
    );
}

export default ChatScreen;
