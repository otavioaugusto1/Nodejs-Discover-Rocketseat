// require serve para trazer módulos usando node
//módulos nativos
const path = require('path')
console.log(path.basename(__filename))

//meu módulo
const myModule = require('./exports')
console.log(myModule)