# validar-nit-gt

Indica la validez de un texto como Número de Identificación Tributaria (NIT) en Guatemala.  El NIT puede ser enviado con o sin guiones y la respuesta puede ser un boolean o un objeto con el NIT limpio.

### Instalación

```js
npm install --save validar-nit-gt
```

### Ejemplo
#### Recibiendo una respuesta true/false
```js
import validarNIT from 'validar-nit-gt'

const valido = validarNIT('3602978-5')

valido = true
```

#### Recibiendo un objeto con el NIT limpio y resultado
```js
import validarNIT from 'validar-nit-gt'

const resultado = validarNIT('3602978k', {limpiar: true})

resultado = { nit: '3602978-K', resultado: true }
```
