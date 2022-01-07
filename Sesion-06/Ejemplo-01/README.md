# Ejemplo 01 - Formik Básico

## Objetivo

- Entender como usar Formik
- Usar los hooks de la librería

## Desarrollo

Para usar Formik tendremos que ya haber corrido en nuestro proyecto el comando

```bash
yarn add formik
```

Si quieres ver un repositorio donde puedes trabajar con el código del reto 1 de la sesión cinco puedes dar click en [este link](https://github.com/SantiagoSiordia/ExampleApp/tree/s05-r01).

Nos enfocaremos en la parte del código donde tenemos formularios.

Para este primer ejemplo modificaremos la manera en que manejamos el formulario de **Sing in**.

Dirijámonos a `App.tsx` y desde la línea 82 podemos ver lo siguiente:

```tsx
// ... Más código
const SignInScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sweeter</Text>
      <Text style={styles.subtitleText}>Sign in</Text>
      <Input
        icon="mail-outline"
        name="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        icon="vpn-key"
        name="Password"
        value={password}
        onChangeText={setPassword}
      />
      <SubmitButton
        text="Sign in"
        onPress={() =>
          save('user', {
            email,
            password,
          })
        }
      />
      <BackgroundDesign />
    </View>
  );
};
// ... Más código
```

Deberemos importar el hook de `useFormik`. Al inicio del archivo agregaremos el `import`.

```tsx
import { useFormik } from 'formik';
```

Y en la línea 85 usaremos este hook

```tsx
const signInForm = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    onSubmit: values => save('user', values),
});
```

Después de esto podemos eliminar las dos líneas de código de donde definimos el estado con `React.useState`.

```tsx
// Líneas a eliminar
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
```

Podremos ver que al eliminar estas líneas, nuestro IDE nos marcara algunos errores en nuestros componentes `Input` y nuestro componente `SubmitButton`. ¡Arreglemos eso!

Al primer Input le cambiaremos los props `value` y `onChangeText`. Pero primero recordemos como luce este componente en nuestro código viejo:

```tsx
<Input
    icon="mail-outline"
    name="Email"
    value={email}
    onChangeText={setEmail}
/>
```

Ahora nos quedaría así:

```jsx
<Input
    icon="mail-outline"
    name="Email"
    value={signInForm.values.email}
    onChangeText={signInForm.handleChange("email")}
/>
```

Lo mismo haremos con nuestro segundo `Input` esta vez se trata del input del password.

```tsx
<Input
    icon="vpn-key"
    name="Password"
    value={signInForm.values.password}
    onChangeText={signInForm.handleChange('password')}
/>
```

Y por último en el componente `SubmitButton` cambiaremos la prop `onPress`. Recordemos que este componente luce de la siguiente manera:

```tsx
<SubmitButton
    text="Sign in"
    onPress={() =>
        save('user', {
            email,
            password,
        })
    }
/>
```

Y ahora cambiara de la siguiente forma:

```tsx
<SubmitButton text="Sign in" onPress={signInForm.handleSubmit} />
```

Ahora es un poco más simple ya que la complejidad es absorbida por Formik.

En este momento debería de comportarse de la misma manera que en el reto 01 de la sesión 05, pero ahora no creamos nosotros el estado manualmente con Formik.

La magía de la librería viene después, ¡apenas comenzamos en esto!

El código completo puedes verlo en este [link](https://github.com/SantiagoSiordia/ExampleApp/tree/s06-e01).

También puedes ver el siguiente snippet de código del resultado final del componente `SignInScreen`:

```tsx
// ... Más código
const SignInScreen: FC = () => {
  const signInForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => save('user', values),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sweeter</Text>
      <Text style={styles.subtitleText}>Sign in</Text>
      <Input
        icon="mail-outline"
        name="Email"
        value={signInForm.values.email}
        onChangeText={signInForm.handleChange('email')}
      />
      <Input
        icon="vpn-key"
        name="Password"
        value={signInForm.values.password}
        onChangeText={signInForm.handleChange('password')}
      />
      <SubmitButton text="Sign in" onPress={signInForm.handleSubmit} />
      <BackgroundDesign />
    </View>
  );
};
// ... Más código
```

## Recursos

- [**`ExampleApp: s05-r01`**](https://github.com/SantiagoSiordia/ExampleApp/tree/s05-r01)
- [**`ExampleApp: s06-e01`**](https://github.com/SantiagoSiordia/ExampleApp/tree/s06-e01)