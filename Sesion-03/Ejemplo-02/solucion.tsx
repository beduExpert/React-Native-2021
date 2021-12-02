import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const App: FC = () => {
    
  const colors: Array<string> = [ "#cc4bc2", "#dd5e98", "#e16f7c", "#c1ae7c"];
  
  return (
    <View style={styles.container}>
      {
        colors.map(color =>
          <View style={[styles.square, { backgroundColor: color}]} />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "200",
    height: "100%",
    padding: 16
  },
  square: {
    width: 100,
    height: 100,
    marginBottom: 16
  }
});

export default App;