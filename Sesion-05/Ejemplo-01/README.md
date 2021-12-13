# Ejemplo # - Concepto principal de redux

## Objetivo

* Agregar redux a una app
* Jugar en Snack/Emulador/Simulador con Redux
## Desarrollo

El estado está descrito como un objeto plano:

```JSON
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

Este objeto es como un modelo con la excepción de que no hay setters. Esto se hace para evitar que diferentes partes del código puedan cambiar el estado arbitrariamente, causando bugs deificiles de reproducir o detectar.

Para cambiar algo en el estado, debemos "despachar" (`dispatch`) una acción. Una acción es también un objeto plano en JavaScript que describe lo que tiene que pasar. Aquíhay algunos ejemplos de acciones.

```JSON
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Al forzar que cada cambio sea descrito como una acción nos permite tener un claro entendimiento de que esta sucediendo en la app. Si algo cambia, sabemos porque cambio. Las acciones son como migajas de pan de como ha cambiado un estado. Finalmente, para atar las acciones y al estado, escribimos una función que se llama "Reductor" (`reducer`). Sería dificil escribir esta función para una app grande, así que escribimos pequeñas funciones que se encargan de pequeñas partes del estado:

```JS
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```

Y escribimos otro reductor que maneja el estado completo de nuestra app al llamar a esos reductores para cada parte del estado:

```JS
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

Esto es basicamente toda la idea de Redux. Nótese que no hemos usado ninguna API de Redux. Viene con algunas utilidades para facilitar este partón de diseño, pero la idea principal es que describar cómo tu estado debe ser actualizado a través del tiempo en respuesta a los objetos de acción, y 90% del código que escribimos es puramente JavaScript, sin uso de Redux mismo.





