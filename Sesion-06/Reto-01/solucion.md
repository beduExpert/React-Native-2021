# Solución

El código refactorizado se vería de la siguiente manera:

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

El archivo completo puedes verlo en este [link](https://github.com/SantiagoSiordia/ExampleApp/blob/s06-r01/App.tsx).