# Sesión 5: Uso y manejo de estados

## :dart: Objetivos

- Aplicar los conocimientos de global state que adquirimos en el work
- Crear un estado global que contenga variables accesibles y mutables en cualquier parte del código de nuestra app
- Utilizar la librería Redux y Toolkit para crear un estado global
- Utilizar Context API en conjunto con Redux para generar un estado global mutable y accesible.

## Desarrollo

En la app en la que has estado trabajando vas a instalar Redux y redux toolkit.

Utilizarás pseudocódigo para determinar qué cosas son las que tu app Sweeter debe llevar. Te recordamos que no tienen que ser exactamente los mismos elementos, pero si la misma cantidad de variables y similarmente complejas.

```TSX
interface GlobalState{
   recentlyLikedSweets: Array<string>; // Contains the id of the Sweets, max 5
   recentlySeenSweets: Array<string>; // Contains the id of the Sweets, max 5
   recentlyVisitedProfiles: Array<string>; // Contains the id of the Profile, max 5
   theme: "light" | "dark";
   unseenNotifications: Array<{
       id: string;
       title: string;
       body: string;
   }>; // Contains notifications, max 5
   alternativeBiographyDescriptions: Array<string>; // Contains alternative descriptions for our bio page, max 5
}
 
const globalState ={
   recentlyLikedSweets: [],
   recentlySeenSweets: [],
   recentlyVisitedProfiles: [],
   theme: "light",
   unseenNotifications: [],
   alternativeBiographyDescriptions: []
}
```

1. La app debe tener UI que utilice los métodos necesarios para actualizar este estado global de la aplicación.

2. Las operaciones que se deben poder realizar para cada una de las variables en el estado global son las que marca el patrón CRUD (Create, read, update y delete).

3. Para el caso de los arreglos:
    - **Create** y **update** son el mismo método ya que solo es necesario hacer un push de un nuevo string o objeto.
    - **Delete** deja vacío el arreglo, este método solo va a ser necesario en las propiedades que tengan sentido que lo implementen, es decir, el usuario no debería tener el poder de resetear el arreglo `recentlyLikedSweets`, ya que esa información no es para él, sino que es útil a los developers. Lo mismo sucede con `recentlySeenSweets` y `recentlyVisitedProfiles`.
    - También se puede hacer **delete** de algún elemento en específico.
    - **Update** modifica algún elemento del arreglo, este método solo hay que agregarlo a `alternativeBiographyDescriptions`.


4. Para el caso del `theme`, solo tiene dos estados “light” o “dark” puedes agregar más variables si quieres. El valor por defecto es “light”, al hacer update solo se puede a otro estado que no sea el actual, y debe tener una acción que resetee el valor por defecto de esta variable

5. El estado debe tener una acción que resetee toda la info que pueda ver el usuario: theme, `unseenNotifications` y  `alternativeBiographyDescriptions`.

6. Asegúrate de que la app guarde por lo menos un dato en el secure store. Este dato tiene que ser un arreglo, puede ser de tarjetas de crédito, domicilios, etc. Cualquier dato que pueda entrar en un arreglo y sea considerado personal del usuario (No es necesario ingresar datos reales, te recomendamos usar datos dummy o falsos).
    
7. Programa que tu app guarde por lo menos un dato en el Async storage. No hay restricción de qué tipo de dato.
