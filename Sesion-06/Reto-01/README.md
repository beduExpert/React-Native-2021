# Reto 01 - Usando Formik

## Objetivo

- Aplicar las utilidades básicas de Formik.
- Practicar la refactorización de formularios.

## Desarrollo

En este reto refactorizaremos el formulario que tenemos en la pantalla `PaymentScreen` de nuestro [anterior ejemplo](./../Ejemplo-01), a este lo llamaremos `paymentForm`.

Deberás eliminar el estado que creamos manualmente con `React.useState`, pero crearemos esas mismas 4 variables a través del hook `useFormik`.

Recuerda refactorizar los cuatro `Input`s y el botón `SubmitButton` para que siga funcionando de la misma manera.

El código a refactorizar puede verse completo en [s06-e01](https://github.com/SantiagoSiordia/ExampleApp/blob/s06-e01/App.tsx)

Y la parte que vamos a modificar puede verse en el siguiente snippet de código:

```tsx
const PaymentScreen: FC = () => {
  const [card, setCard] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.subtitleText}>Payment</Text>
      <Input
        icon="credit-card"
        name="Card number"
        onChangeText={setCard}
        value={card}
      />
      <Input
        icon="person"
        name="Full name"
        onChangeText={setName}
        value={name}
      />
      <Input
        icon="date-range"
        name="Expiry date"
        placeholder="mm/yy"
        onChangeText={setDate}
        value={date}
      />
      <Input icon="vpn-key" name="CVV" onChangeText={setCvv} value={cvv} />
      <SubmitButton
        text="Pay"
        onPress={() =>
          save('card', {
            card,
            name,
            date,
            cvv,
          })
        }
      />
      <BackgroundDesign />
    </View>
  );
};
```

Cuanto estés preparado puedes dirigirte a la [solución del reto](./solucion.md).