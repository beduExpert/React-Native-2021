# Solución

Para generar una vista similar en React native podríamos idear muchas soluciones, aquí está una de todas esas:

```JS
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estilos de CSS</Text>
      <Text style={styles.regularText}>¡Transformemos este código web a React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    padding: 8,
  },
  title: {
    color: "red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 32
  },
  regularText: {
    fontSize: 43,
    color: "blue",
    fontFamily: "Times New Roman"
  }
});

export default App;
```

Esto generaría un renderizado así:

![StyleSheet React native](assets/SSRn.png)

Nótese como se tuvo que especificar `fontSize` en el `h1 (title)` ya que se tiene que emular los estilos por default que HTML ya tiene precargados, pasa lo mismo con `fontFamily`.