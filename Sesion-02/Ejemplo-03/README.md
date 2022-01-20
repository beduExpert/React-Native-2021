# Ejemplo 03 - CSS a React Native StyleSheet (Parte 2/2)

## Objetivo

- Replicar estilos de CSS en RN complejos
- Obtener la habilidad de transformar cualquier estilo de CSS a RB

## Desarrollo

Por ejemplo, podemos transformar los siguientes estilos:

```CSS
font-size: 18px;
line-height: 24px;
color: red;
```

```TSX
{
  fontSize: 18,
  lineHeight: 24,
  color: 'red',
}
```

Debemos convertir todos los valores que lleven números de cualquier tipo a solamente numeros (de type `number`). Y todos los que se parezcan a un `string` los transformamos a `string`.

Hay cosas que no son tan simples como esto... a estos los llamamos valores indirectos.

En CSS:

```CSS
text-shadow-offset: 10px 5px;
font-variant: small-caps;
transform: translate(10px, 5px) scale(5);
```

En React Native:

```TSX
{
  textShadowOffset: { width: 10, height: 5 },
  fontVariant: ['small-caps'],
  transform: [
    { translateY: 5 },
    { translateX: 10 },
    { scale: 5 },
  ]
}
```

Los shorthand values de CSS no existen en React native, se tienen que definir por separado:

```CSS
font: bold 14px/16px "Helvetica";
margin: 5px 7px 2px;
```

```TSX
{
  fontFamily: 'Helvetica',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontVariant: [],
  lineHeight: 16,
  marginTop: 5,
  marginRight: 7,
  marginBottom: 2,
  marginLeft: 7,
}
```

Por suerte para nosotros, si es que sabes mucho de CSS y no recuerdas muy bien como transformar los estilos, existen herramientas como [CSStoX: Surge](https://csstox.surge.sh/) que hace el trabajo de recordar por nosotros.