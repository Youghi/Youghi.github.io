const os = require('os')
let res = os.platform()
console.log(res)

const myMath = require('./myMath')
let res1 = myMath.add(4, 6)
let res2 = myMath.minus(8, 3)
console.log(`res1: ${res1}, res2: ${res2}`)