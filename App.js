import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

// const PlaceholderImage = require('./assets/icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Open up App.js to start working on your app!</Text>
      <Text style={styles.pText}>I've opened the podbay doors, now what, HAL?</Text>
      <TextInput style={styles.inputText} defaultValue="What are you doing, Dave?"/>
      <Text style={styles.titleText}>What if I did this? Aha! My phone can see this!</Text>
      <Text>Now that the web is open, will my phone see this? Yes.</Text>
      <View>
        <Image 
          style={styles.imageSize}
          source={require('./assets/phabio.jpg')}/>
        </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleText: {
    fontWeight: 'bold',
    color: 'skyblue',
    fontSize: 14
  },
  pText: {
    fontFamily: 'courier',
    fontSize: 12,
  },
  inputText: {
    borderColor: 'black',
    borderWidth: 2,
    height: 30
  },
  imageSize: {
    resizeMode: 'cover',
    width: 320,
    height: 220
  }
});
