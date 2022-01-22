# Ejemplo 3 - Header bar

## Objetivo

- Personalizar headers.
- Controlar la barra de navegación.

## Desarrollo

### Configurando el título del header

Un componente pantalla acepta un prop `options` el cual es o un objeto o una función que retorna un objeto, que contiene varias opciones de configuración. El que usamos para el título del header es `title`, como mostramos en el siguiente ejemplo de [Snack](https://snack.expo.dev/@santiagosiordia/header-title):

```tsx
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  );
}
```

### Usando parámetros en el título

Para usar los parámetros en el título, necesitamos hacer que el prop `options` sea una función que retorne un objeto de configuración. Puede ser tentador usar `this.props` dentro de `options`, pero ya que es definido antes de que el componente sea renderizado, `this` no se refiere a una instacia del componente y por eso `props` no está disponible. En vez de eso, si hacemos que `options` sea una función, React Navigation lo llamará con un objeto que contenga `{ navigation, route}` - en este caso, todo lo que nos importa es la ruta, la cual es el mismo objeto que es pasado a nuestros props de la pantalla como prop `route`.

Veamos el [ejemplo en Snack](https://snack.expo.dev/@santiagosiordia/parametros-en-titulo)

```tsx
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
```

The argument that is passed in to the options function is an object with the following properties:

navigation - The navigation prop for the screen.
route - The route prop for the screen
We only needed the route prop in the above example but you may in some cases want to use navigation as well.

El argumento que es pasado en la función de opciones es un objeto con las siguientes propiedades:

- `navigation`: La prop `navigation` para la pantalla, incluye todos los métodos y propiedades de la navegación.
- `route`: La prop `route` incluye toda la información relacionada a la ruta y ubicación en el navegador.

Solamente necesitamos el prop `route` en el ejemplo de arriba pero podemos en algunos casos querer usar `navigation` también.

### Actualizando opciones con `setOptions`

It's often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions

Es muchas veces necesario actualizar la configuracion de opciones para la pantalla actualmente activa. Podemos hacer esto con `navigation.setOptions`.

Veamos el [ejemplo de Snack](https://snack.expo.dev/@santiagosiordia/actualizando-opciones-de-navegacion):

```tsx
<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
```

## Resumen

- Podemos personalizar el header dentro del prop `options`.
- El prop `options` puede ser un objeto o una función. Cuando es una función, se le pasa como argumento un objeto con la propiedades `navigation` y `route`.
- Podemos también especificar `screenOptions` compartidas entre todas las pantallas del stack navigator cuando se inicializa.