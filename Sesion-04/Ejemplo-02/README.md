# Ejemplo 2 - App con navegación.

## Objetivo

- Movernos a través de varias pantallas
- Preparar a la app para tener multiples pantallas

## Desarrollo

Después de haber creado una app, para iniciar tendremos que correr el comando:

### Instalando librerías

```bash
yarn add @react-navigation/native react-native-screens react-native-safe-area-context && cd ios && pod install && cd ..
```

Lo cual instala las herramientas necesarias en nuestra app

Add the following code to the body of MainActivity class:
Agregamos el siguiente código al cuerpo de la clase `MainActivity`:

```java
import android.os.Bundle;

// ...

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

Y a `App.tsx`:

```tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        {/* El resto de nuestro código */}
    </NavigationContainer>
  );
}
```

Para este momento ya podríamos construir las apps para ios y android. Pero agreguemos un par de cosas más.

Instalemos el tipo de navegación que nosotros queremos, en este caso `stack navigation`:

```bash
yarn add @react-navigation/native-stack
```

### Creando un stack navigator

`createNativeStackNavigator` es una función que retorna un objeto que contiene 2 propiedades: `Screen` y `Navigation`. Ambos son componentes de React usados para configurar el navegador. El navegador debe contener elementos `Screen` y a sus hijos para definir la configuración para las rutas.

`NavigationContainer` es un componente que maneja nuestro árbol de navegación y contiene el estado de navegación. Este componente debe envolver toda la estructura de navegación. Usualmente, renderizamos este componente en la ruta de nuestra app, la cual es usualmente el compomente exportado de `App.tsx`.

```tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

### Configurando el navegador

Toda la configuración de la ruta es especificada como `props` a nuestro navigator. No hemos pasado ningún prop a nuestro navigator, así que por ahora usa la configuración por defecto.

Agreguemos una segunda pantalla a nuestro navigator y configuremos la pantalla de Home para que se renderize primero:

```tsx
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Ahora nuestro stack tiene dos `routes`, una de *Home* y otra de *Details*. Una ruta puede ser especificada al usar el componente `Screen`. El componente `Screen` acepta un prop `name` que correcponde al nombre de la ruta que usaremos para navegar, y un prop `component` que corresponde a lo que va a renderizar.

En el ejemplo anterior la ruta `Home` corresponde al componente `HomeScreen`, y la ruta `Details` corresponde al componente `DetailsScreen`. La ruta inicial para el stack es la ruta `Home`.

### Mini actividad: Ruta por defecto

- Intenta cambiar la ruta por defecto a `Details` y recarga la app (El fast refresh de React Native no actualizará los cambios de `initialRouteName`).
- Cámbia la ruta por defecto de vuelta a `Home`.

### Especificando opciones.

Cada pantalla en el navigator puede espeficar algunas opciones para el navegador, como el título a renderizar en el header. Estas opciones pueden ser pasadas en el prop `options` de cada componente pantalla, como el siguiente ejemplo:

```tsx
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/>
```

Algunas veces vamos a querer especificar las mismas opciones para todas las pantallas en el navegador. Por eso, podemos pasar un prop `screenOptions` al `navigator`.

### Props adicionales

Algunas veces podemos querer pasar props adicionales a la pantalla. Podemos hacer eso de dos maneras:

1. Usar `React.Context` para envolver al navegador con un `Context Provider` para pasar datos a la pantalla (Esto es lo recomendado).
2. Usar un `render callback` para la pantalla en lugar de especificar un prop `component`:

```tsx
<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```

### Navegando a otra pantalla

```tsx
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// Todo el código anterior
```

Vamos explicando esto:
- `navigation` - El prop `navigation` es pasado a cada `screen component` en el navegador stack nativo.
- `navigate('Details')` - Llamamos a la función `navigate` con el nombre de la ruta a la que nos gustaría navegar.

> Si llamamos a `navigation.navigate` con un nombre de ruta que no hayamos definido en el `navigator`, imprimirá un error en construcciones de desarrollo y nada va a pasar en construcciones de producción. 

### Mini actividad: Navegando a la ruta actual.

Ahora tenemos dos rutas, ¿no?: 

1. La ruta `Home`
2. La ruta `Details`

¿Qué pasaría si navegaramos a la ruta de `Details` de nuevo dede la pantalla de `Details`?

### Navegando a una ruta multiples veces:

```tsx
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

Podemos ver esto en [Snack](https://snack.expo.dev/@santiagosiordia/same-route-multiple-times).

---
TODO: VIDEO DE SNACK AQUI 
---

### Ir para atrás

El header por defecto en el `native stack navigator` va a incluir automaticamente un botón de "atrás" cuando sea posible ir para atrás desde la pantalla activa.

A veces quieres ser capaz de programaticamente accionar este comportamiento, y por eso podemos usar `navigation.goBack()`;

```tsx
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
```

> En Android, el botón de "hacia atrás" en el hardware acciona esta función `goBack()`.

Otra requerimiento común es ser capaces de ir para atrás multiples pantallas -- por ejemplo, si estás varias pantallas dentro del stack y quieres quitar todas para volver a la primera pantalla. En este caso, conocemos que queremos ir al principio de la app, así que podemos usar `navigate('Home')` (no `push("Home)` ¿Qué crees que pase si sí?). Otra alternativa sería `navigation.popToTop()`, el cual vuelve a la primera pantalla del stack.

```tsx
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
```

Podemos ver este ejemplo en [Snack](https://snack.expo.dev/@santiagosiordia/navegando-hacia-la-primera-pantalla).

## Resumen

- `navigation.navigate('RouteName')` hace empuja una nueva ruta al native stack navigator si no está ya en el stack, de otra manera salta a esta pantalla.
- Podemos llamar a `navigation.push('RouteName')` tantas veces como querramos y va a continuar empujando rutas.
- La barra de header va a automaticamente mostrar un botón hacia atrás, pero podemos programaticamente ir hacia atrás al llamar `navigation.goBack()`. En android, el botón físico de hacia atrás funciona como se espera.
- Podemos ir hacia atrás en una pantalla existente en el stack con `navigation.navigate('RouteName')`, y puedes ir hacia atrás a la primera pantalla en el stack con `navigation.popToTop()`.
- el prop `navigation` siempre está disponible para todos los componentes pantalla.