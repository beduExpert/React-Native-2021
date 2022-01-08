# Solución

Como podías imaginar, es necesario instalar el paquete `card-validator`:

```bash
yarn add card-validator
```

Y tenemos que importar esta librería en algún lugar de las primeras líneas de código:

```tsx
import valid from 'card-validator';
```

Todos los demás cambios están limitados a estar dentro o tener relación con el componente `PaymentScreen`. Al inicio de este reto este componente lucía de la siguiente manera:

```tsx
const PaymentScreen: FC = () => {
  const paymentForm = useFormik({
    initialValues: {
      card: '',
      name: '',
      date: '',
      cvv: '',
    },
    onSubmit: values => save('card', values),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.subtitleText}>Payment</Text>
      <Input
        icon="credit-card"
        name="Card number"
        onChangeText={paymentForm.handleChange('card')}
        value={paymentForm.values.card}
      />
      <Input
        icon="person"
        name="Full name"
        onChangeText={paymentForm.handleChange('name')}
        value={paymentForm.values.name}
      />
      <Input
        icon="date-range"
        name="Expiry date"
        placeholder="mm/yy"
        onChangeText={paymentForm.handleChange('date')}
        value={paymentForm.values.date}
      />
      <Input
        icon="vpn-key"
        name="CVV"
        onChangeText={paymentForm.handleChange('cvv')}
        value={paymentForm.values.cvv}
      />
      <SubmitButton text="Pay" onPress={paymentForm.handleSubmit} />
      <BackgroundDesign />
    </View>
  );
};
```

Para crear el esquema de esta tarjeta tenemos que hacer algo similar a esto:

```tsx
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
```

Ya que el método `test()` de Yup te permite usar una función propia para validar un campo, esta función tiene que retornar un `boolean`, que es exactamente lo que devuelve las funciones de validación de `card-validator`.

Es tiempo de agregar el esquema al formulario:

```tsx
const paymentForm = useFormik({
    initialValues: {
        card: '',
        name: '',
        date: '',
        cvv: '',
    },
    onSubmit: values => save('card', values),
    validationSchema: PaymentSchema, // <----- Aquí pasamos el esquema.
});
```

Y ahora solo queda agregar los props correspondientes a los `Input`s y al `SubmitButton`:

```tsx
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
```

Si en algún punto de este archivo te perdiste, puedes ver las diferencias de código en el [ExampleApp: s06-r02](https://github.com/SantiagoSiordia/ExampleApp/commit/e4025b880f81ca620f4b304de8c08c006f9e4db5).

