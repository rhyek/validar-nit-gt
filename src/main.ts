const regex = /^(\d+)-(\d|K)$/

export default function (nit: any, options: { limpiar?: boolean } = {}) {
  const { limpiar = false } = options
  var res = {
    nit: nit,
    resultado: false
  }

  if (nit != null) {
    var text = nit.toString().toUpperCase()
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
      res = {
        resultado: right === (resultado === 10 ? 'K' : resultado.toString()),
        nit: text
      }
    }
  }

  return options.limpiar ? res : res.resultado
}