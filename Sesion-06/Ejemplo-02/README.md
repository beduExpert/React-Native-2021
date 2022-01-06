# Ejemplo 02 - Formik para mejorar UX

## Objetivo

- Agregar funcionalidades utiles para cualquier usuario
- Hacer que nuestros formularios sean más controlados

## Desarrollo

Para este ejemplo necesitaremos instalar la librería Yup.

```bash
yarn add yup
```

Podrás ver el código incial completo en el este [link](https://github.com/SantiagoSiordia/ExampleApp/blob/s06-r01/App.tsx).

Agregaremos un nuevo esquema para definir como nos gustaría que los inputs recibieran información. Este esquema puede vivir en cualquier lugar del archivo, pero en este ejemplo lo pondremos justo arriba de la definición del componente `SignInScreen`, en la línea 82.

Pero primero debemos importar Yup.

```ts
import * as Yup from 'yup';
```

El esquema luce de la siguiente manera

```ts
const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
});
```