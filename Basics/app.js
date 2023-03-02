const importedValue = require('./share_module.js')
console.log(importedValue)

const func = importedValue.getGreeting
console.log(func(importedValue.name))

