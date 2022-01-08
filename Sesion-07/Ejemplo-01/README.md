# Ejemplo 01 - Estado global y refactorización masiva

## Objetivo

- Recordar Redux
- Crear un estado global en redux
- Refactorizar el código para que sea más legible y mantenible

## Desarrollo

Vayamos a nuestra app de ejemplo que hemos estado trabajando en las anteriores sesiones.

Puedes encontrarla aqui: [Example App: s06-r02](https://github.com/SantiagoSiordia/ExampleApp/tree/s06-r02).

Creemos un poco de estado global con Redux, para practicar nuestros conocimientos de la librería Redux. Empecemos instalando lo necesario en nuestra app.

```bash
yarn add redux @reduxjs/toolkit
```

Y crearemos una carpeta para contener todo nuestro código nuevo, la llamaremos `src` y vivirá en la raíz del proyecto. Además dentro de esta carpeta crearemos otra llamara `features` y dentro de esta otra carpeta que se llame `redux`, dentro de esta última carpeta haremos un archivo que se llame `store.ts` y otro que se llame `preferences.ts`.

---

Podemos hacer todo esto con el siguientes comandos:

```bash
mkdir src && cd src && mkdir features && cd features && mkdir redux && cd redux && touch store.ts preferences.ts && cd ../../..
```

Dentro de este archivo `src/feature/redux/preferences.ts` agregaremos una variable que se llame `theme` a nuestro estado de redux y una acción para hacerle toggle, es decir, cambiarlo de `dark` a `light`. Veamos el resultado.

```ts
import { createSlice } from '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = preferencesSlice.actions;
```

En el archivo `src/feature/redux/store.ts` configuraremos nuestro store.

```ts
import { configureStore } from '@reduxjs/toolkit';
import { preferencesSlice } from './preferences';

export const store = configureStore({
  reducer: preferencesSlice.reducer,
});
```

Y crearemos algunos archivos `index.ts` para que nos sea más fácil exportar todo.

```bash
cd src && cd features && touch index.ts && cd redux && touch index.ts && cd ../../..
```

En `src/feature/redux/index.ts`:

```ts
export * from './preferences';
export * from './store';
```

Y en `src/feature/index.ts`

```ts
export * from './redux';
```

---

Y vamos a refactorizar un poco nuestro archivo App.tsx porque ahora es muy largo y no es lo óptimo por tener. Vamos a crear algunos directorios más para organizar mejor.

```bash
cd src && touch index.ts && mkdir components screens && cd screens && touch index.ts && touch SignInScreen.tsx PaymentScreen.tsx StatusScreen.tsx index.ts && cd ../components && touch BackgroundDesign.tsx Input.tsx SubmitButton.tsx index.ts
```

En `src/components/BackgroundDesign.tsx`:

```tsx
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

export const BackgroundDesign: FC = () => {
  return (
    <View style={backgroundStyles.edge}>
      <View style={backgroundStyles.firstBall} />
      <View style={backgroundStyles.secondBall} />
    </View>
  );
};

const backgroundStyles = StyleSheet.create({
  firstBall: {
    backgroundColor: '#5071AF',
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    position: 'absolute',
    top: -33,
    left: -40,
    zIndex: -1,
  },
  secondBall: {
    backgroundColor: '#4EA8DB',
    width: 272,
    height: 272,
    borderRadius: 272 / 2,
    position: 'absolute',
    top: -65,
    right: -34,
    zIndex: -1,
  },
  edge: {
    width: '100%',
    height: '100%',
    borderColor: '#4EA8DB',
    borderWidth: 4,
    position: 'absolute',
    zIndex: -1,
  },
});
```

En `src/components/Input.tsx`:

```tsx
import { MaterialIcons } from '@expo/vector-icons';
import React, { ComponentProps, FC } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

export type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

export type InputProps = TextInputProps & {
  icon: MaterialIconName;
  name: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
};

export const Input: FC<InputProps> = ({
  icon,
  name,
  placeholder = null,
  error = false,
  errorMessage,
  ...props
}) => {
  return (
    <View style={formStyles.container}>
      <Text
        style={StyleSheet.flatten([
          formStyles.label,
          error ? formStyles.errorTextColor : {},
        ])}>
        {name}
      </Text>
      <View
        style={StyleSheet.flatten([
          formStyles.inputContainer,
          error ? formStyles.inputContainerError : {},
        ])}>
        <View style={formStyles.iconContainer}>
          <MaterialIcons
            name={icon}
            size={24}
            color={error ? '#c42348' : 'black'}
          />
        </View>
        <TextInput
          style={StyleSheet.flatten([
            formStyles.input,
            error ? formStyles.errorTextColor : {},
          ])}
          placeholder={placeholder ?? name}
          placeholderTextColor="#75757F"
          {...props}
        />
      </View>
      {error && (
        <Text style={formStyles.errorMessage}>Error: {errorMessage}</Text>
      )}
    </View>
  );
};

const formStyles = StyleSheet.create({
  container: {
    marginHorizontal: 48,
    marginBottom: 8,
  },
  label: {
    color: 'black',
    fontSize: 12,
    marginLeft: 15,
  },
  inputContainer: {
    backgroundColor: '#A5D1FA',
    height: 30,
    borderRadius: 15,
    paddingRight: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  iconContainer: {
    height: 30,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
  },
  errorMessage: {
    color: '#c42348',
    fontSize: 12,
    marginLeft: 15,
  },
  inputContainerError: {
    borderWidth: 2,
    borderColor: '#c42348',
  },
  errorTextColor: {
    color: '#c42348',
  },
});
```

En `src/components/SubmitButton`:

```tsx
import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

export type SubmitButtonProps = TouchableOpacityProps & {
  text: string;
};

export const SubmitButton: FC<SubmitButtonProps> = ({ text, ...props }) => {
  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity
        style={StyleSheet.flatten([
          buttonStyles.button,
          {
            backgroundColor: props.disabled
              ? 'rgba(80, 113, 175, 0.4)'
              : 'rgb(80, 113, 175)',
          },
        ])}
        activeOpacity={0.7}
        {...props}>
        <Text style={buttonStyles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    marginHorizontal: 48,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    marginTop: 32,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});
```

En `src/components/index.ts`:

```ts
export * from './BackgroundDesign';
export * from './Input';
export * from './SubmitButton';
```

En `src/index.ts`:

```ts
export * from './components';
export * from './features';
export * from './screens';
```

---

Refactorizaremos las funciones de Expo secure store también.

```bash
cd src/features && mkdir secure-store && cd secure-store && touch secureStore.ts index.ts && cd ../../..
```

En `src/features/secure-store/secureStore.ts`:

```ts
import * as SecureStore from 'expo-secure-store';

export const save = async (key: string, value: Record<string, any>) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

export const getValueFor = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};
```

En `src/features/secure-store/index.ts`:

```ts
export * from './secureStore';
```

En `src/features/index.ts`:

```ts
export * from './redux';
export * from './secure-store';
```

---

Refactorizamos también Las pantallas.

En `src/screens/index.ts`:
```ts
export * from './PaymentScreen';
export * from './SignInScreen';
export * from './StatusScreen';
```
En `src/screens/PaymentScreen.ts`:
```ts
import valid from 'card-validator';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import { BackgroundDesign, Input, save, SubmitButton } from '..';

export const PaymentScreen: FC = () => {
  const PaymentSchema = Yup.object().shape({
    card: Yup.string().test(
      'test-number',
      'Credit Card number is invalid',
      number => valid.number(number).isValid,
    ),
    name: Yup.string().test(
      'test-name',
      'Name is invalid',
      name => valid.cardholderName(name).isValid,
    ),
    date: Yup.string().test(
      'test-date',
      'Expiration date is invalid',
      date => valid.expirationDate(date).isValid,
    ),
    cvv: Yup.string().test(
      'test-date',
      'CVV is invalid',
      cvv => valid.cvv(cvv).isValid,
    ),
  });

  const paymentForm = useFormik({
    initialValues: {
      card: '',
      name: '',
      date: '',
      cvv: '',
    },
    onSubmit: values => save('card', values),
    validationSchema: PaymentSchema,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.subtitleText}>Payment</Text>
      <Input
        icon="credit-card"
        name="Card number"
        onChangeText={paymentForm.handleChange('card')}
        value={paymentForm.values.card}
        onBlur={paymentForm.handleBlur('card')}
        error={paymentForm.touched.card && !!paymentForm.errors.card}
        errorMessage={paymentForm.errors.card}
      />
      <Input
        icon="person"
        name="Full name"
        onChangeText={paymentForm.handleChange('name')}
        value={paymentForm.values.name}
        onBlur={paymentForm.handleBlur('name')}
        error={paymentForm.touched.name && !!paymentForm.errors.name}
        errorMessage={paymentForm.errors.name}
      />
      <Input
        icon="date-range"
        name="Expiry date"
        placeholder="mm/yy"
        onChangeText={paymentForm.handleChange('date')}
        value={paymentForm.values.date}
        onBlur={paymentForm.handleBlur('date')}
        error={paymentForm.touched.date && !!paymentForm.errors.date}
        errorMessage={paymentForm.errors.date}
      />
      <Input
        icon="vpn-key"
        name="CVV"
        onChangeText={paymentForm.handleChange('cvv')}
        value={paymentForm.values.cvv}
        onBlur={paymentForm.handleBlur('cvv')}
        error={paymentForm.touched.cvv && !!paymentForm.errors.cvv}
        errorMessage={paymentForm.errors.cvv}
      />
      <SubmitButton
        text="Pay"
        onPress={paymentForm.handleSubmit}
        disabled={!paymentForm.isValid}
      />
      <BackgroundDesign />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginBottom: 32,
  },
});

```
En `src/screens/SignInScreen.ts`:
```ts
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import { BackgroundDesign, Input, save, SubmitButton } from '..';

export const SignInScreen: FC = () => {
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
        onBlur={signInForm.handleBlur('email')}
        error={signInForm.touched.email && !!signInForm.errors.email}
        errorMessage={signInForm.errors.email}
      />
      <Input
        icon="vpn-key"
        name="Password"
        value={signInForm.values.password}
        onChangeText={signInForm.handleChange('password')}
        onBlur={signInForm.handleBlur('password')}
        error={signInForm.touched.password && !!signInForm.errors.password}
        errorMessage={signInForm.errors.password}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 60,
    textAlign: 'center',
    color: 'black',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginBottom: 32,
  },
});

```
En `src/screens/StatusScreen.ts`:
```ts
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getValueFor } from '..';

export const StatusScreen: FC = () => {
  const [user, setUser] = useState<null | string>(null);
  const [card, setCard] = useState<null | string>(null);
  const [status, setStatus] = useState<string>('loading');

  const getStatus = async () => {
    try {
      setStatus('loading');
      const securedUser = await getValueFor('user');
      const securedCard = await getValueFor('card');
      setUser(securedUser);
      setCard(securedCard);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Status</Text>
      <Text>User</Text>
      <Text>{status === 'loading' ? 'loading' : user}</Text>
      <Text>Card</Text>
      <Text>{status === 'loading' ? 'loading' : card}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 60,
    textAlign: 'center',
    color: 'black',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginBottom: 32,
  },
});
```

---

Y como último paso de nuestra refactorización, modificaremos `App.tsx` de la siguiente manera:

```tsx
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { PaymentScreen, SignInScreen, StatusScreen } from './src';

const Tab = createBottomTabNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Status"
          component={StatusScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="data-usage" color={color} size={size} />
            ),
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
```

Podemos notar que todo nuestro trabajo rindió frutos, ahora está organizado y además agregamos un poco de estado en el store de Redux.

Si en algún momento de este ejemplo te perdiste, puedes ver el changelog de nuestro código en este [link](https://github.com/SantiagoSiordia/ExampleApp/commit/b6369417e673aeba0d93b233acf3232b52dbab62)