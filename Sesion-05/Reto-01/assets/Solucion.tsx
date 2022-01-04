import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BackgroundDesign: FC = () => {
  return (
    <View style={backgroundStyles.edge}>
      <View style={backgroundStyles.firstBall} />
      <View style={backgroundStyles.secondBall} />
    </View>
  );
};

const Input: FC = () => {
  return (
    <View>
      <Text style={formStyles.label}>Input</Text>
    </View>
  );
};

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sweeterText}>Sweeter</Text>
      <Text style={styles.subtitleText}>Sign in</Text>
      <Input />
      <Input />
      <BackgroundDesign />
    </View>
  );
};

const backgroundStyles = StyleSheet.create({
  firstBall: {
    backgroundColor: '#5071AF',
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    position: 'absolute',
    top: -33,
    left: -40,
    zIndex: -1,
  },
  secondBall: {
    backgroundColor: '#4EA8DB',
    width: 272,
    height: 272,
    borderRadius: 272 / 2,
    position: 'absolute',
    top: -65,
    right: -34,
    zIndex: -1,
  },
  edge: {
    width: '100%',
    height: '100%',
    borderColor: '#4EA8DB',
    borderWidth: 4,
    position: 'absolute',
    zIndex: -1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
  },
  sweeterText: {
    fontSize: 60,
    textAlign: 'center',
    color: 'black',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
});

const formStyles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 16,
  },
});

export default App;
