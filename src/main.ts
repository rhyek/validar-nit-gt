const regex = /^(\d+)-(\d|K)$/

export default function (param: any) {
  var success = false
  var text = param
  if (param != null) {
    text = param.toString().toUpperCase()
    if (!text.includes('-')) {
      text = text.substring(0, text.length - 1) + '-' + text.substring(text.length - 1);
    }
    const match = regex.exec(text)
    if (match !== null) {
      const [full, left, right] = match
      let suma = 0
      left.split('').reverse().forEach((c, index) => {
        suma += parseInt(c) * (index + 2)
      })
      const resultado = (11 - (suma % 11)) % 11
      success = right === (resultado === 10 ? 'K' : resultado.toString())
    }
  }
  return {
    'resultado': success,
    'nit': text
  }
}