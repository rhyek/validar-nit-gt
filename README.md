# validar-nit-gt

Indica la validez de un texto como Número de Identificación Tributaria (NIT) en Guatemala.
Acepta NIT con o sin guión. El resultado incluye el nit estandarizado con mayúsculas y guión

### Instalación

```js
npm install --save validar-nit-gt
```

### Ejemplo
```js
import validarNIT from 'validar-nit-gt'

const resultado = validarNIT('3602978-5')

resultado = {
    'resultado' => true,
    'nit' => '3602978-5',
}
```
