## Sesión 6: Control y validación de entradas 🎫

### 1. Objetivos 🎯

- Conocer las utilidades de Formik.
- Crear Formularios controlados y seguros.

### 2. Contenido 📘

Pudimos ver en el [anterior Reto](../Sesion-05/Reto-01) que es muy fácil hacer formularios inservibles. Nuestros formularios eran bastante inútiles desde el punto de vista de seguridad y control. Claro... podríamos crear por nuestra cuenta algunas maneras de agregar seguridad además de agregar funcionalidad visual a los inputs. Por ejemplo, sería genial como experiencia de usuario que el input donde estés escribiendo tenga algún Feedback visual, tal vez que cambie de color cuando su propiedad `focused` sea verdadera, pero piensa en que necesitaríamos un `React.useState` mas. Podríamos restringir la entrada de textos de alguna manera... tal vez utilizando solo un tipo de teclado específico del sistema operativo, pero aún así podrías pegar strings de algún otro lugar... de tal manera que además tendríamos que hacer que de alguna manera el input no acepte pegar texto... etc.

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

Agreguemos en la app de nuestro anterior Reto un poco de Control con Formik en el [Ejemplo 01](./Ejemplo-01).

Después de completar el anterior ejemplo, podemos probar nuestros conocimientos en el [Reto 01](./Reto-01)

- [**`EJEMPLO 1`**](./Ejemplo-01)
- [**`RETO 1`**](./Reto-01)

---

#### <ins>Tema 2: Formik para mejorar UX</ins>

Habiendo refactorizado los formularios de nuestra app de ejemplo podemos notar que no hacen nada diferente aún a haberlos creado con estados regulares de `React.useState`. Hágamos ahora algunas mejoras para sacarle provecho a esta librería en el siguiente [ejemplo](./Ejemplo-02).

Habiendo completado el segundo ejemplo, podemos intentar mejorar aún más la experiencia del usuario en nuestro [tercer ejemplo](./Ejemplo-03).

Para este punto ya debemos estar bastante familiarizados con las herramientas de Formik, aunque no hemos visto todas. En el [Reto 02](./Reto-02) practicaremos lo que ya sabemos sobre Formik.

- [**`EJEMPLO 2`**](./Ejemplo-02)
- [**`EJEMPLO 3`**](./Ejemplo-03)
- [**`RETO 2`**](./Reto-02)

---
### 3. Postwork :memo:

Encuentra las indicaciones y consejos para reflejar los avances de tu proyecto de este módulo.

- [**`POSTWORK SESIÓN 1`**](./Postwork/)
