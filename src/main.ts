const regex = /^(\d+)-(\d|K)$/

export default function(text: string) {
  text = text.toUpperCase()
  const match = regex.exec(text)
  if (match !== null) {
    const [ full, left, right ] = match
    let suma = 0
    left.split('').reverse().forEach((c, index) => {
      suma += parseInt(c) * (index + 2)
    })
    const resultado = (11 - (suma % 11)) % 11
    return right === (resultado === 10 ? 'K' : resultado.toString())
  }
  return false
}