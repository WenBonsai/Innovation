import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';

function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages(previousMessages => [...previousMessages, { key: Date.now().toString(), text: inputText }]);
            setInputText('');
        }
    };

    return (
        <KeyboardAvoidingView 
            style={GlobalStyles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 20}
        >
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={GlobalStyles.messageContainer}>
                        <Text style={GlobalStyles.messageText}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={item => item.key}
            />

            <View style={GlobalStyles.inputContainer}>
                <TextInput
                    style={GlobalStyles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type your message here..."
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </KeyboardAvoidingView>
    );
}

export default ChatScreen;
