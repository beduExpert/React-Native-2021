# Ejemplo 4 - Secure store

Veamos lo necesario para usar Async Storage.

## Instalar la librería

Deberemos correr el comando necesario para instalar la librería en el proyecto en el que lo queramos usar:

```bash
yarn add @react-native-async-storage/async-storage
```

Y actualizar los pods con

```bash
npz pod-install
```

## Uso

### Guardar datos

Como cualquier otra librería, debemos importarla

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';
```

Para guardar algún dato:

```ts
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // Error
  }
}
```

Hay algo muy similar entre esta libreria y `SecureStore`. Solo se pueden guardar datos de tipo `string`, así que si quisieramos guardar objectos o arreglos deberemos implementar la lógica necesaria para esto:

```ts
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // Error
  }
}
```

### Leer datos

Para leer datos debemos simplemente usar la función `getItem()`:

```ts
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // Valores previamente guardados.
    }
  } catch(e) {
    // Error leyendo un valor.
  }
}
```

De nuevo, ya que solo guarda `string`s, si queremos leer un objeto deberemos parsear la `string`.

```ts
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // Error leyendo un valor.
  }
}
```

Estos simples métodos son suficientes para el 95% de las operaciones con esta librería. Pero aún así, deberías estar enterado de que existen muchos más. Estos métodos se pueden ver en detalle en la [documentación oficial de la librería](https://react-native-async-storage.github.io/async-storage/docs/api/).