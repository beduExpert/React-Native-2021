# Ejemplo 2 - Layout sencillo con método map

## Objetivo

- Recrear el ejemplo 1 con el método map.
- Entender maneras de ahorrarnos código.

## Desarrollo

Veamos como recrear el [código del ejemplo 01](./../Ejemplo-01/solucion.tsx):

Tenemos que

```TSX
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: "#cc4bc2"}]} />
      <View style={[styles.square, { backgroundColor: "#dd5e98"}]} />
      <View style={[styles.square, { backgroundColor: "#e16f7c"}]} />
      <View style={[styles.square, { backgroundColor: "#c1ae7c"}]} />
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
```

Pero como vemos, repetimos cuatro veces la misma línea de código:

```TSX
<View style={[styles.square, { backgroundColor: "someColor"}]} />
```

¿Encuentras una manera de usar el método map para resolver esto?

Si no la encuentras puedes ir a la [solución de este ejemplo](./solucion.tsx).
