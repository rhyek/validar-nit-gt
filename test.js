const assert = require('assert')
const validarNIT = require('./dist/main').default

const nits = [
  [null, false],
  [{}, false],
  [Date(), false],
  [undefined, false],
  ['3602978-5', true],
  ['36029785', true],
  ['36029784', false],
  ['2701164-K', true],
  ['2701164-k', true],
  ['2701164k', true],
  ['13123123', false],
  ['3158352-0', true],
  ['lol', false],
  ['4530406-8', true]
]

for (let [nit, valido] of nits) {
  it(`'${nit}' ${valido ? 'es válido' : 'NO es válido'}.`, function () {
    assert.strictEqual(valido, validarNIT(nit).resultado)
  })
}