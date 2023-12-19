import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const columnCount = 2;

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2', // Soft, light background color
    },
    titleStyle: {
        width: '85%',
        textAlign: 'center',
        fontSize: 30,
        paddingRight: 66,
        fontWeight: 'bold',
        color: '#333', // Dark gray for a sleek look
    },
    btn: {
        borderRadius: 10,
        backgroundColor: '#e0e0e0', // Neutral button color
    },
    btn_txt: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
    },
    blue: {
        backgroundColor: '#b0c4de', // Softened blue shade
    },
    green: {
        backgroundColor: '#90ee90', // Softened green shade
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
    title: {
        fontSize: 35,
        color: '#333',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: "space-between",
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    buttonGallery: {
        fontSize: 15,
        color: "white",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        elevation: 3, // for Android shadow
        shadowOpacity: 0.3, // for iOS shadow
        shadowRadius: 3,
        shadowOffset: { height: 2, width: 0 },
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    gallery: {
        flex: 0.4,
        paddingTop: 20,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ddd', // Light border color
        margin: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
    },
    InspirationContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 5,
    },
    imageContainer: {
        margin: 5,
        width: width / columnCount - 10,
        height: width / columnCount,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    PostContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f8f8', // Light background for a clean look
  },
  row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor: 'white', // Bright and clean
      padding: 10,
      borderRadius: 8, // Soft rounded corners
      shadowColor: '#000', // Subtle shadow for depth
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 3,
  },
  label: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333',
      flex: 1, // Flex to align with other elements in the row
  },
  PostImageContainer: {
      alignItems: 'center',
      marginVertical: 20,
  },
  PostImage: {
      width: width - 40, // Full width with padding
      height: width - 40, // Square shape
      borderRadius: 8, // Rounded corners
  },
  button: {
      backgroundColor: '#e0e0e0', // Neutral button color
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
},
    imageGallery: {
        marginTop: 20,
        alignItems: 'center',
    },
    selectedImage: {
        width: 100,
        height: 100,
        margin: 5,
    },
    searchBarContainerInspiration: {
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        paddingHorizontal: 10,
    },
    searchBarInputContainerInspiration: {
        backgroundColor: '#EDEDED',
    },
    inspirationContainer: {
        justifyContent: 'space-evenly',
    },
    imageContainerInspiration: {
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageInspiration: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingHorizontal: 8,
      paddingVertical: 6,
      backgroundColor: '#fff', // White background for the input area
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 1,
        paddingHorizontal: 1,
        borderRadius: 5,
    },
    messageContainer: {
      padding: 10,
      backgroundColor: '#e6e6eb', // Choose a light color for message bubbles
      borderRadius: 20,
      marginVertical: 5,
      maxWidth: '70%',
      alignSelf: 'flex-start', // Align to the left for incoming messages
      marginRight: 'auto', // Align to the right for outgoing messages
  },
  messageText: {
    fontSize: 16,
    color: '#333', // Dark color for text
},
profileHeaderContainer: {
  alignItems: 'center',
  paddingVertical: 20,
  backgroundColor: '#ffffff', // Or any color that matches your design
},
profileImage: {
  width: 100, // Adjust the size as needed
  height: 100,
  borderRadius: 50, // Circular image
  borderColor: '#000', // If you need a border
  borderWidth: 1,
},
profileName: {
  fontSize: 20,
  fontWeight: 'bold',
  marginVertical: 10,
},
profileSection: {
  backgroundColor: '#f2f2f2', // Adjust background colors as needed
  padding: 15,
},
profileSectionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333333',
},
profileDashboardDetails: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},
profileDashboardText: {
  fontSize: 16,
  color: '#333333',
},
profileListItem: {
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#e6e6eb',
},
profileListItemText: {
  fontSize: 16,
  color: '#333333',
},
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContent: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  welcomeImage: {
    width: 150, // Adjust based on your requirement
    height: 150, // Adjust based on your requirement
    marginTop: 20, // Add some spacing above the image
  },
  header: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    marginBottom: 30,
},
inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 15,
    marginHorizontal: 20,
},
error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
},

});

export default GlobalStyles;
