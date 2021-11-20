## Sesión 2: Componentes y estilos 🤖

<img src="assets/RNStyle.png" align="right" height="120" hspace="10">
<div style="text-align: justify;">

### 1. Objetivos :dart: 

- Identificar las diferencias en estilos en React Native, comparandola con estilos en React JS.
- Diferenciar conceptos de estilo y componentes.
- Analizar la estructura y funcionalidad de un sistema de diseño.
- Crear nuestroprimer componente con estilo.

### 2. Contenido :blue_book:

El estilo es una parte muy importante en React native. React native es básicamente una technología front end, el estilo, los layouts, el renderizado de imagenes y datos en general, las animaciones y todo lo que le importa al frontend de una aplicación le importa a React native. Así que vamos a conocerlo

---

<img src="images/tools.png" align="right" height="90"> 

#### <ins>StyleSheet</ins>

StyleSheet es una abstracción de lo que es una CSS StyleSheet


```JS
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
```

Tips para la calidad del código:

- Al mover los estilos afuera de la función del componente haces el código más fácil de entender.
- Nombrar los estilos es una buena manera de agregar significado a los pequeños componentes.


![StyleSheet Preview](./assets/StyleSheetComponent.png)

- [**`EJEMPLO 1`**](./Ejemplo-01)

---

<img src="assets/StyleSheet.png" align="right" height="90"> 

#### <ins>StyleSheet vs Objeto plano (plain object)</ins>

Hay algo muy importante que debemos aclarar aquí... ¿Hay difencia al usar `StyleSheet.create({ ...styleProps })` a solamente `{ ...styleProps }`?

Hay diferentes respuestas a esta pregunta... 

Hay dos mitos bastante populares acerca de los beneficios de usar `StyleSheet.create`

##### Mito 1: `StyleSheet` tiene mejor desempeño


No hay absolutamente ninguna diferencia de rendimiento entre `StyleSheet` y un objeto declarado **fuera del render** (sería diferente si estás creando un nuevo objeto dentro del render cada vez). La diferencia de rendimiento es un mito.

El origen del mito probablemente se deba a que el equipo de **React Native** intentó hacer esto, pero no tuvo éxito. En ningún lugar de la [documentación oficial](https://reactnative.dev/docs/stylesheet), mientras que el [código fuente](https://github.com/facebook/react-native/blob/main/Libraries/StyleSheet/StyleSheet.js#L207) menciona que la mejora de desempeño no está implementado:

```JS
/*
 * Performance:
 *
 *  - Making a stylesheet from a style object makes it possible to refer to it
 * by ID instead of creating a new style object every time.
 *  - It also allows to send the style only once through the bridge. All
 * subsequent uses are going to refer an id (not implemented yet).
 */
```

##### Mito 2: `StyleSheet` valida el objecto de estilos en tiempo de compilación (compile time).

Esto no es verdad. JavaScript puro no puede validar objectos en tiempo de compilación.

- Sí lo valida en tiempo de ejecución (Runtime), pero también lo hace cuando pasas un objeto de estilo a un componente. No hay diferencia
- Sí lo valida en tiempo de compilación (Compile time) **si estás usando Flow o TypeScript**, pero también lo hace cuando pasas el objecto plano como estilo en los props del componente, o si usas correctamente el **TypeHint** como lo podemos ver aquí:

```JS
const containerStyle: ViewStyle = {
   ...viewStyleProps
}
```

---

<img src="assets/CSS.png" align="right" height="90"> 

#### <ins>CSS vs StyleSheet</ins>

Veamos esta imagen comparativa:

![Almost CSS](assets/AlmostCSS.png)

Como podemos apreciar, cada propiedad de estilo de StyleSheet es comparable a una propiedad identica en CSS, con la pequeña diferencia de que en StyleSheet se usa el `camelCase` para nombrar propiedades, de tal manera que la propiedad `background-color` de CSS es identica a `backgroundColor` de StyleSheet.

Pasemos a ver un ejemplo de como transormar CSS a StyleSheet

- [**`Ejemplo 2`**](./Ejemplo-02)
---

<img src="images/chaomi.png" align="right" height="110"> 

#### <ins>Tema 4</ins>

Basta de emulaciones, ahora veamos como funciona en el mundo real. Nuestra app, por muy sencilla que sea ya está lista para ser instalada en un dispositivo móvil y para verla en acción.

**Nota al Experto:**
  
 + Recuerda que cada subtema puede contener un ejemplo, un reto, o más de un ejemplo y más de un reto. Recuerda borrar esta línea después de haberla leído.
- [**`RETO 3`**](./Reto-03)
---

### 3. Postwork :memo:

Encuentra las indicaciones y consejos para reflejar los avances de tu proyecto de este módulo.

- [**`POSTWORK SESIÓN 1`**](./Postwork/)

<br/>


</div>





