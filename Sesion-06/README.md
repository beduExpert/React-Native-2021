## Sesión 6: Control y validación de entradas 🎫

### 1. Objetivos 🎯

- Conocer las utilidades de Formik.
- Crear Formularios controlados y seguros.

### 2. Contenido 📘

Pudimos ver en el [anterior Reto](../sesion-05/../Sesion-01/Reto-01) que es muy fácil hacer formularios inservibles. Nuestros formularios eran bastante inútiles desde el punto de vista de seguridad y control. Claro... podríamos crear por nuestra cuenta algunas maneras de agregar seguridad además de agregar funcionalidad visual a los inputs. Por ejemplo, sería genial como experiencia de usuario que el input donde estés escribiendo tenga algún Feedback visual, tal vez que cambie de color cuando su propiedad `focused` sea verdadera, pero piensa en que necesitaríamos un `React.useState` mas. Podríamos restringir la entrada de textos de alguna manera... tal vez utilizando solo un tipo de teclado específico del sistema operativo, pero aún así podrías pegar strings de algún otro lugar... de tal manera que además tendríamos que hacer que de alguna manera el input no acepte pegar texto... etc.

O podríamos usar Formik, que nos tiene ya soluciones a esto y más.

---

#### <ins>Tema 1: Formik Básico</ins>

Para instalar formik debemos correr en nuestro proyecto:

```bash
yarn add formik
```

Y Yup para usar validaciones

```
yarn add yup
```

Agreguemos en la app de nuestro anterior Reto un poco de Control con Formik en el [Ejemplo 01](./Ejemplo-01)

- [**`EJEMPLO 1`**](./Ejemplo-01)

---

<img src="images/structure.png" align="right" height="90"> 

#### <ins>Tema 2</ins>

Una vez que el proyecto está creado, la estructura o forma en la que se organiza es de suma importancia. No sólo nos ayuda a mantener nuestro código organizado, sino que también es importante para el funcionamiento de nuestra nueva app.

- [**`EJEMPLO 2`**](./Ejemplo-02)
- [**`RETO 1`**](./Reto-01)
---

<img src="images/emulator.jpg" align="right" height="90"> 

#### <ins>Tema 3</ins>

Ahora que tenemos mayor conocimiento de nuestro proyecto, vamos a configurar un emulador de algún dispositivo móvil para poder correr nuestra aplicación! :iphone:. Es decir, vamos a correr un dispositivo móvil virtual en nuestra computadora para simular la funcionalidad de nuestra app.

**Nota al Experto:**
  
 + Recuerda que cada subtema puede contener un ejemplo, un reto, o más de un ejemplo y más de un reto. Recuerda borrar esta línea después de haberla leído.
- [**`RETO 2`**](./Reto-02)
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

