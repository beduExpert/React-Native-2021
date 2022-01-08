# Ejemplo 03 - Formik para mejorar UX en cada input

## Objetivo

- Explorar utilidades de Formik que no son básicas.
- Hacer que nuestros formularios sean más atractivos para cualquier usuario.

## Desarrollo

Hemos pasado de la barrera de la seguridad ya. Habiendo puesto algo de validación de nuestro lado en el cliente, hemos hecho ya nuestra parte para que el tipo de hackeo "Cross site scripting" sea imposible de realizar.

---

> **¿Qué es el Cross Site Scripting?**
>
> Cross-site scripting (XSS) es una vulnerabilidad de seguridad que permite a un atacante inyectar en un sitio web código malicioso del lado del cliente. Este código es ejecutado por las víctimas y permite a los atacante eludir los controles de acceso y hacerce pasar por usuarios. Según el Open Web Application Security Project, XSS fue la séptima vulnerabilidad más común de las aplicaciones web en 2017.
> 
> Estos ataques tienen éxito si la aplicación web no emplea suficiente validación o codificación. El navegador del usuario no puede detectar que el script malicioso no es confiable, por lo que da acceso a cookies, tokens de sesión u otra información sensible específica del sitio, o permite que el script reescriba contenido HTML.

--- 

El cross site scripting es posible también en nuestras apps móviles ya que React Native usa JavaScript para manejar todo.

Habiendonos relajado un poco de la válidación de entradas en los formularios de nuestras apps, vamos a preocuparnos ahora de avanzar en la experiencia que le podemos ofrecer al usuario.

Para este ejemplo usaremos como estado inicial de nuestro código el archivo [App.tsx de la rama s06-e02](https://github.com/SantiagoSiordia/ExampleApp/blob/s06-e02/App.tsx).

Enfoquémonos en la siguiente parte del archivo:

```tsx
const SignInScreen: FC = () => {
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .email('Must be a valid email address'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(25, 'Too Long!')
      .matches(/[A-Za-z]/, 'Only latin characters')
      .required('Required'),
  });

  const signInForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => save('user', values),
    validationSchema: SigninSchema,
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
      <SubmitButton
        text="Sign in"
        onPress={signInForm.handleSubmit}
        disabled={!signInForm.isValid}
      />
      <BackgroundDesign />
    </View>
  );
};
```

Este anterior snippet de código representa el formulario de SignIn.

---

Al código anterior nos gustaría modificarlo de tal manera que podamos darle al usuario una manera de enterarse inmmediatamente que el campo esta llenado de manera incorrecta cuando cambia de campo a otro.

Para cambiar un poco el código de arriba y sin errores, debemos hacer unos cambios importantes en nuestro `Input`. Mira como cambiarán los props, actualmente `InputProps` es:

```tsx
type InputProps = TextInputProps & {
  icon: MaterialIconName;
  name: string;
  placeholder?: string;
};
```

Pero agregaremos dos props más, relacionadas con errores en el campo.

```tsx
type InputProps = TextInputProps & {
  icon: MaterialIconName;
  name: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
};
```

El prop `error` es un booleano, recordemos que el operador `?` define que no sea requerido. El prop `errorMessage` tampoco es requerido y esta vez representa un string que usaremos para renderizar cuando el campo esté mal llenado.

Ahora veamos el componente `Input`:

```tsx
const Input: FC<InputProps> = ({
  icon,
  name,
  placeholder = null,
  ...props
}) => {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>{name}</Text>
      <View style={formStyles.inputContainer}>
        <View style={formStyles.iconContainer}>
          <MaterialIcons name={icon} size={24} color="black" />
        </View>
        <TextInput
          style={formStyles.input}
          placeholder={placeholder ?? name}
          placeholderTextColor="#75757F"
          {...props}
        />
      </View>
    </View>
  );
};
```

En este momento luce muy simple, ¡vamos a complicarlo! Todo esto con el objetivo en mente de mejorar la experiencia de usuario mientras hacemos que el código aún sea legible para otros programadores.

```tsx
const Input: FC<InputProps> = ({
  icon,
  name,
  placeholder = null,
  error = false, // Tomamos el prop error y lo igualamos a false si no se define el prop cuando se invoca
  errorMessage, // Tomamos el mensaje de error de los props.
  ...props
}) => {
  return (
    <View style={formStyles.container}>
      <Text
        style={StyleSheet.flatten([ // Agregamos el flatten para combinar dos o más objetos de estilo
          formStyles.label,
          error // La variable error definirá que estilo queremos cuando haya un error
            ? {
                color: '#c42348',
              }
            : {},
        ])}>
        {name}
      </Text>
      <View
        style={StyleSheet.flatten([ // Agregamos el flatten para combinar dos o más objetos de estilo
          formStyles.inputContainer,
          error // La variable error definirá que estilo queremos cuando haya un error
            ? {
                borderWidth: 2,
                borderColor: '#c42348',
              }
            : {},
        ])}>
        <View style={formStyles.iconContainer}>
          <MaterialIcons
            name={icon}
            size={24}
            color={error ? '#c42348' : 'black'} // La variable error definirá que estilo queremos cuando haya un error
          />
        </View>
        <TextInput
          style={StyleSheet.flatten([ // Agregamos el flatten para combinar dos o más objetos de estilo
            formStyles.input,
            error // La variable error definirá que estilo queremos cuando haya un error
              ? {
                  color: '#c42348',
                }
              : {},
          ])}
          placeholder={placeholder ?? name}
          placeholderTextColor="#75757F"
          {...props}
        />
      </View>
      {error && ( // La variable error definirá si renderizamos un texto de error o no
        <Text style={formStyles.errorMessage}>Error: {errorMessage}</Text>
      )}
    </View>
  );
};
```