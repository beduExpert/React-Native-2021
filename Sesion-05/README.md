## Sesión 5: Uso y manejo de estados 💽

### 1. Objetivos :dart: 

- Entender las capacidades de la libreria redux
- Crear sistemas de manejo de estado global con Redux
- Entender el Async storage
- Encriptar información con Secure Store
- Guardar información no encriptada en Context API

### 2. Contenido :blue_book:

En toda app es necesario persistir datos de una u otra manera, en ocasiones estos datos pueden serbastante útiles en diferentes situaciones, por ejemplo, recordar una tarjeta de crédito. Claramente al guardar una tarjeta de crédito deberíamos encriptar el dato, a diferencia de algunos otros, tal vez el tema de la app, "dark" o "light", ese dato solo guarda una preferencia irrelevante del usuario si alguien lo robara. Para todas estas situaciones usamos una diferente tipo de lugar para guardar las cosas.

---

#### <ins>Tema 1: Redux</ins>

Redux es un contenedor predeciple para applicaciones en JavaScript.

Ayuda a escribir apps que se comporten de manera consistente, y pueden ser corridas en diferentes entornos, como en clientes, servidores y apps nativas, y es fácil de testear. Además de esto, provee una gran experiencia de desarrollo.

Puedes usar redux con React o con cualquier otra librería de UI. Solo pesa 2kB, pero tiene un gran ecosistema disponible.

Veamos un [ejemplo](./Ejemplo-01) de como usar Redux en una app.

Utilizemos esto en una app de React native en el [segundo ejemplo](./Ejemplo-02)

- [**`EJEMPLO 1`**](./Ejemplo-01)
- [**`EJEMPLO 2`**](./Ejemplo-02)

---

#### <ins>Tema 2: Context API </ins>

Context nos da una manera de pasar datos a través de el árbol de componentes sin tener que pasar props hacia cada hijo.

Por ejemplo, tendrías que pasar datos desde el componente padre de todo hasta el enésimo nivel de componentes.

Vamos a crear una app con Context API en nuestro [tercer ejemplo](./Ejemplo-03).

- [**`EJEMPLO 3`**](./Ejemplo-03)
---

#### <ins>Tema 3: Secure Store</ins>

`expo-secure-store` nos da una manera de encriptar y guardar de manera segura pares key-value localmente en el dispositivo, como lo podemos ver en el [Ejemplo 04](./Ejemplo-04)

Habiendo completado el ejemplo 4, vayamos a aplicar nuestros conocimientos en el [Reto 01](./Reto-01) de esta sesión.

- [**`EJEMPLO 4`**](./Ejemplo-04)
- [**`Reto 1`**](./Reto-01)

---

#### <ins>Tema 4: Async Storage</ins>

Para terminar con los diferentes lugares de almacenamiento, veamos como usar nuestro async storage en el [Ejemplo 05](./Ejemplo-05).

Después de haber visto los métodos básicos del Async Storage, procedamos al [Reto 02](./Reto-02).

- [**`EJEMPLO 5`**](./Ejemplo-05)
- [**`Reto 2`**](./Reto-02)