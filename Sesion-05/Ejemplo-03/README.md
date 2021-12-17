# Ejemplo 3 - Context API

Al usar `React.Context` se require de 3 simples pasos

## Crear el contexto

La función que viene ya con React crea una instancia de Contexto:

```TS

import { createContext } from 'react';

const Context = createContext('Default value');

```

La función solo acepta un argumento opcional: el valor por defecto.

## Dar contexto

`Context.Provider` es un componente disponible en la instancia del contexto. Se usa para dar el contexto a todos los componentes hijos, no importa que tan profundos se encuentren.

Para setear el valor del contexto usamos el prop `value` disponible en `<Context.Provider value={value} />`

```TSX
const Main = () => {
  const value = 'My context value';

  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  )

}
```

De nuevo, lo importante aquí es que todos los componentes en los que necesitamos consumir el contexto estén envueltos en el componente que nos provee de contexto.

Si quieres cambiar el valor del contexto, simplemente debemos de actualizar el prop `value`.

## Consumir el contexto

Consumir el contexto puede ejecutarse de dos diferentes maneras. Cuando

La primera manera, y la que recomnedamos es usar el hook de React `useContext(Context)`

```TSX
import { useContext } from 'react';

const MyComponent = () => {
  const value = useContext(Context)

  return <Text>{value}</Text>
}
```