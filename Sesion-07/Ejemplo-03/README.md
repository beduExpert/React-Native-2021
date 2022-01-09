# Ejemplo 03 - React query

## Objetivo

- Utilizar React query para consumir APIs asíncronas.
- Crear un estado del servidor.

## Desarrollo

Usaremos como estado inicial de nuestro código el de este [link](https://github.com/SantiagoSiordia/ExampleApp/tree/s07-e02).

Habrá que instalar React query:

```bash
yarn add react-query
```

Crearemos una carpeta para albergar toda la funcionalidad de **React Query**.

```bash
mkdir src/features/services src/features/services/queries src/features/services/api && touch src/features/services/index.ts
```

En `src/features/services/index.ts`:

```ts
export * from './api'
export * from './queries'
```

En `src/features/index.ts`:

```ts
export * from './redux';
export * from './secure-store';
export * from './services';
```

Usaremos la [API de Rick & Morty](https://rickandmortyapi.com/) para este ejemplo.

Agregaremos algunos archivos con estilos, copialos y pegalos para que no nos entretengamos tanto en esta parte, los cambios completos pueden ser vistos en este [link](https://github.com/SantiagoSiordia/ExampleApp/commit/dd5aadff9ba8a50c42cc47996cba030672b187fd).

https://user-images.githubusercontent.com/56652644/148701166-e7f3e780-2648-4fcc-975f-b0a104fe4b86.mov

Podemos ver que lo que hace esta nueva pantalla es renderizar algunas cartas de personajes de Rick & Morty, pero no tenemos estas cartas guardadas en alguna parte de nuestra app.
