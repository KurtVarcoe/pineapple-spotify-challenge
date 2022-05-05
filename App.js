
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from 'expo-font';

import Module from './components/Module';
import User from './components/User';
import TrackList from './components/TrackList';
import TabBar from './components/TabBar';


const App = () => {
  let [fontsLoaded] = useFonts({
    'Circula-Medium': require('./assets/fonts/Circula-Medium.otf')
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require("./assets/highklassified.jpg")} style={styles.headerImage}>
          <View style={styles.backIconContainer}>
            <Icon name="chevron-thin-left" color="white" size={25} style={styles.backIcon}/>
          </View>
          <Text style={styles.artistName}>High Klassified</Text>
        </ImageBackground>
        <Module/>
        <User/>
        <TrackList/>
        <TabBar/>
      </SafeAreaView>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  artistName: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Circula-Medium',
    fontWeight: '800'
  },
  backIconContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
    backgroundColor: 'black',
    opacity: 0.4,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  headerImage: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default App;
