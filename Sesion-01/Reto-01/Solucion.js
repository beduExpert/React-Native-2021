import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const [firstNumber, onChangeFirstNumber] = React.useState(0);
  const [secondNumber, onChangeSecondNumber] = React.useState(0);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input
        onChangeText={onChangeFirstNumber}
        value={firstNumber}
        placeholder="First number"
        keyboardType="numeric"
      />
      <Text>This is your number: {firstNumber}</Text>
      <Text>This is your number multiplied by 2: {2 * firstNumber}</Text>
      <Text>This is your number to the 1.2 power: {firstNumber ** 1.2}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeSecondNumber}
        value={secondNumber}
        placeholder="Second number"
        keyboardType="numeric"
      />

      <Text>Your first number times your second number: {firstNumber * secondNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;