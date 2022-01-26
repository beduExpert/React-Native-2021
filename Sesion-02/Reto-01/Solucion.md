# Solución

```tsx
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const GeometricShape: FC = () => <View style={geometricStyles.square} />;

const Line: FC<{
  horizontal?: boolean;
}> = ({ horizontal = false }) => {
  return (
    <View style={horizontal ? lineStyles.horizontal : lineStyles.vertical} />
  );
};

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <GeometricShape />
      <View
        style={StyleSheet.flatten([
          styles.linesContainer,
          { flexDirection: 'row' },
        ])}>
        {[...Array(9)].map((_e, i) => (
          <Line key={Math.random() + i} />
        ))}
      </View>
      <View
        style={StyleSheet.flatten([styles.linesContainer, { height: 200 }])}>
        {[...Array(6)].map((_e, i) => (
          <Line horizontal key={Math.random() + i} />
        ))}
      </View>
    </View>
  );
};

const geometricStyles = StyleSheet.create({
  square: {
    backgroundColor: '#A5D1FA',
    borderWidth: 3,
    borderColor: 'white',
    borderBottomEndRadius: 50,
    width: 100,
    height: 100,
  },
});

const lineStyles = StyleSheet.create({
  vertical: {
    height: 200,
    width: 3,
    backgroundColor: 'white',
  },
  horizontal: {
    width: '100%',
    height: 3,
    backgroundColor: 'white',
  },
});

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#184B66',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linesContainer: {
    width: '100%',
    paddingHorizontal: 70,
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default App;
```