import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Day from '../components/Day';
import Hour from '../components/Hour';

export default function HomeScreen() {
  return (
    <ImageBackground
    style={styles.container}
    resizeMode={'cover'}
    source={
      require('../assets/images/night.png')
    }
    >
    <View style={styles.tempContainer}>
      <Text style={styles.locationFont}>Location</Text>
      <Text style={styles.weatherFont}>Weather</Text>
      <View style={{flexDirection: 'row'}}><Text style={styles.tempFont}>52</Text><Text style={styles.degreeFont}>°</Text></View>
    </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          style={styles.hoursContainer}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}>
          <Hour style={styles.hourStyle} hour={"3PM"} weather={"☀️"} temperature={"60"}></Hour>
          <Hour style={styles.hourStyle} hour={"4PM"} weather={"⛅"} temperature={"60"}></Hour>
          <Hour style={styles.hourStyle} hour={"5PM"} weather={"🌩️"} temperature={"60"}></Hour>
          <Hour style={styles.hourStyle} hour={"6PM"} weather={"🌧️"} temperature={"60"}></Hour>
          <Hour style={styles.hourStyle} hour={"7PM"} weather={"❄️"} temperature={"60"}></Hour>
          <Hour style={styles.hourStyle} hour={"8PM"} weather={"☁️"} temperature={"60"}></Hour>
        </ScrollView>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
          <Day style={styles.dayStyle} day={"Friday"} weather={"Sunny"} temperature={"60"}></Day>
          <Day style={styles.dayStyle} day={"Saturday"} weather={"Snowing"} temperature={"60"}></Day>
          <Day style={styles.dayStyle} day={"Sunday"} weather={"Rainy"} temperature={"60"}></Day>
          <Day style={styles.dayStyle} day={"Monday"} weather={"Cloudy"} temperature={"60"}></Day>
          <Day style={styles.dayStyle} day={"Tuesday"} weather={"Sunny"} temperature={"60"}></Day>
          <Day style={styles.dayStyle} day={"Wednesday"} weather={"Sunny"} temperature={"60"}></Day>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  dayStyle: {
    marginTop: 8,
  },
  degreeFont: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '200',
  },
  hoursContainer: {
    marginBottom: 0,
  },
  hourStyle: {
    marginLeft: 36,
  },
  locationFont: {
    color: 'white',
  },
  tempContainer: {
    paddingTop: 200,
    paddingBottom: 180,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  tempFont: {
    textAlign: 'center',
    fontSize: 60,
    color: 'white',
    fontWeight: '100',
  },
  weatherFont: {
    color: 'white',
  },
});

const oldstyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
