import React, { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App: FC = () => {
    
  const colors: Array<string> = [ "#cc4bc2", "#dd5e98", "#e16f7c", "#c1ae7c"];
  
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.negativeBorderRadius} />
      <View style={[styles.negativeBorderRadius, { backgroundColor: "#5171A5", borderBottomRightRadius: 50 }]} />
      <View style={styles.halfScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5171A5",
    width: "100%",
    height: "100%"
  },
  halfScreen: {
    backgroundColor: "#3F3047",
    width: "100%",
    height: windowHeight / 2,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
  },
  negativeBorderRadius: {
    width: 100,
    height: 100,
    backgroundColor: "#3F3047",
    position: "absolute",
    top: windowHeight / 2 - 100,
    right: 0
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#98B9AB',
    position: "absolute",
    top: windowHeight / 2 - 50,
    zIndex: 1,
    left: windowWidth / 2 - 50,
    borderColor: '#5171A5',
    borderWidth: 10
  }
});

export default App;