# Reto 02 - Formik en UI/UX

## Objetivo

- Practicar herramientas no-básicas de Formik.
- Hacer formularios más atractivos y avanzados.

## Desarrollo

En el Ejemplo 03 aprendimos a modificar el `SignInForm` de manera que mostrará mensajes de error, pero el formulario de pagos `PaymentForm` sigue estando igual que como terminó en la [Sesión 05 - Reto 01](../../Sesion-05/Reto-01).

Si comparas el `SignInForm` y el `PaymentForm` en este momento, hay una clara ventaja en experiencia de usuario en el `SignInForm`. El objetivo de este reto es aplicar todos los conocimientos que obtuvimos al modificar el `SignInForm` en el formulario de pagos.

Al final de este reto deberás haber cumplido con los siguientes puntos:

- Existe un esquema de validacion para el `PaymentForm` en el que definiremos las posibles entradas de cada uno de los cuatro `Inputs`.
- Cada `Input` maneja correctamente los mensajes de error y cambios de color.
- No es posible que se guarde la información de la tarjeta si el formulario no es válido.
- El botón de Submit se deshabilita si el formulario no es válido.

Para validar los datos de la tarjeta nos ayudaremos de un paquete más: [card-validator](https://www.npmjs.com/package/card-validator). Además usaremos el método [`test()`](https://github.com/jquense/yup#validation-tests) de Yup.

Cuando lo logres puedes dirigirte a la [solución de este reto](./Solucion.md).