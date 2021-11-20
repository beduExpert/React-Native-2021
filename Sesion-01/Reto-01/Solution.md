# Solución

Para esta solución debemos seguir estos pasos, no necesariamente en orden.

- Agregar un estado para cada número que el usuario va a ingresar.
- Agregar un `TextInput` para cada número que el usuario va a ingresar.
- Conectar el estado y el cambio de estado (`onChange`) con su respectivo `TextInput`
- Renderizar un texto con la descripción de la operación
- Asegurarnos de hacer las operaciones de la manera correctamente

De tal manera que el código de nuestra app se ve así:

```JS
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const App = () => {

  const [firstNumber, onChangeFirstNumber] = React.useState(0);
  const [secondNumber, onChangeSecondNumber] = React.useState(0);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
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
    paddingTop: 20,
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
```

Si tenemos problemas para leer este archivo podemos irnos a un [archivo propio con la solución](./Solucion.js).