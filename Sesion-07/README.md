## Sesión 7: Consumo de APIs 🛍

<div style="text-align: justify;">

### 1. Objetivos 🎯

- Refactorizar código de manera más rápida.
- Consumir APIs de manera asíncrona.
- Manejar el estado del servidor.
### 2. Contenido 📘

Constantemente en cualquier proyecto en React nos enfrentamos con el mismo problema: Consumir APIs. Consumir APIs no siempre es bien logrado en todos los proyectos, pero aquí aprenderemos a lograrlo!

---

#### <ins>Tema 1: Global state y refactorización de código</ins>

En nuestra app actual no tenemos un estado global con redux, ¡hay que crearlo! Algo simple, con una sola variable: `theme`. Pero para eso, tenemos que refactorizar un poco nuestro código o rápidamente se nos puede volver "Código Spaghetti" ó "Spaguetti code".

Es importante en todos los proyectos tener los archivos separados en sus propios directorios, y que a su vez sea fácil acceder a ellos.

Veamos cómo lograr todo esto en el [Ejemplo 01](./Ejemplo-01).

- [**`EJEMPLO 1`**](./Ejemplo-01)

---

#### <ins>Tema 2: React Query</ins>

Esta librería se describe a si misma como la librería faltante de React para fetching de datos.

**React query** es una capa delgada de caching que vive en nuestras apps. Ya que es una librería de fetcheado de datos, es agnóstica a cómo decidamos fetchear esos datos. La única cosa que React Query necesita saber es la promesa devuelta por Axios, Fetch o cualquier otra manera de fetchear datos.

The two main concepts of **React Query** are queries and mutations. While queries deal with fetching data, mutations handle modifying data on the server.

Los dos conceptos principales de **React Query** son [`queries`](https://react-query.tanstack.com/guides/queries) y [`mutations`](https://react-query.tanstack.com/guides/mutations).

**React query** exporta un hook llamado `useQuery` para manejar queries. `useQuery` toma dos parámetros. El primer parámetro es un identificador ÚNICO para describir que es lo que estamos fetcheando. El segundo parámetro es la función para fetchear datos - siempre es una función asíncrona que devuelve datos o un error.

Veamos el siguiente código:

```ts
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const usePosts = () => useQuery('posts', fetchPosts);
```

El hook `useQuery` devuelve un objeto `query` y también maneja todo el ciclo de vida al rededor de nuestro fetching así que no tenemos que preocuparnos por usar un hook `useEffect`.

El objeto `query` consiste de algunos estados importantes mencionados en la documentación oficial de [React Query](https://react-query.tanstack.com/guides/queries).

- `isLoading` o ` status === 'loading'` - El query no tiene datos y esta fetcheando.
- `isError` o `status === 'error'` — El query ha encontrado un error.
- `isSuccess` o `status === 'success'` — El query fue exitoso y tiene datos.
- `isIdle` o `status === 'idle'` — El query está deshabilitado

Y con esta información es suficiente para empezar a modificar nuestra app.

Veamos un poco más del estado global con Redux para recordarlo experimentalmente en el [Ejemplo 02](./Ejemplo-02).

Habiendo refrescado nuestras memorias, ahora usemos React Query en el [Ejemplo 03](./Ejemplo-03).

- [**`EJEMPLO 2`**](./Ejemplo-02)
- [**`EJEMPLO 3`**](./Ejemplo-03)
  
---
### 3. Postwork :memo:

Encuentra las indicaciones y consejos para reflejar los avances de tu proyecto de este módulo.

- [**`POSTWORK SESIÓN 1`**](./Postwork/)
