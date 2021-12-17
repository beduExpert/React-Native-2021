# Ejemplo 3 - Secure store

Vamos a instalar y a usar esta librería en un proyecto propio de react native.

## Creando la app

Debemos correr el comando apropiado para crear la app

`npx react-native init ExpoSecureStoreExample --template react-native-template-typescript`

![Project initialized](assets/ProjectInit.png)

## Correr la app

Sabemos que después de crear la app tenemos que correrla en algún emulador, aquí usaremos android para este ejemplo. Debemos tener un emulador de android corriendo y dos terminales abiertas en la misma ubicación: el folder que se acaba de crear.

Para ir a este folder en la misma terminal en la que creamos la app, debemos ejecutar `cd ExpoSecureStoreExample`.

En una terminal ejecutamos `yarn start` y en la segunda terminal ejecutamos `yarn android`.

![Android terminals before scripts](assets/AndroidTerminals.png)
![Android terminals on scripts](assets/AndroidTerminalsScripts.png)

Recordemos que tarda un rato construyendo la app para android, también tarda en construir para iOS. Pero una vez que haya terminado,

![Android terminals running scripts](assets/AndroidTerminalsRunning.png)

## Reemplazamos el contenido de `App.tsx`

Ingresemos esto a nuestro archivo:

```TSX
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text> Expo secure store!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

La app ahora debería verse así:

![App.tsx simplified](./assets/AppSimplified.png)

Ahora instalemos expo secure store.

## Instalando secure-store

Ejecutamos el siguiente comando

```bash
npx install-expo-modules
```

### Si falla la instalación de secure-store

Ejecturemos el siguiente comando:

```bash
yarn add expo
```

**Haremos manualmente los siguientes cambios para ios:**

![Manual ios changelog](./assets/SecureStore-ios-changelog.png)

Ejecutamos `npx pod-install`

**Haremos manualmente los siguientes cambios para android:**

![Manual android changelog 1](./assets/SecureStore-android-changelog1.png)
![Manual android changelog 2](./assets/SecureStore-android-changelog2.png)
![Manual android changelog 3](./assets/SecureStore-android-changelog3.png)

### Verificando que funciona la instalación.

Podemos pegar el siguiente código en nuestra App, veamos si logea bien los resultados a la consola.

```TS

import Constants from 'expo-constants';
console.log(Constants.systemFonts);

```