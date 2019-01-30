var response = require('./cal.js')
let stdin = process.openStdin()
console.log("Enter Number x:");
stdin.addListener('data', (x) => {
    var y = x.toString()
    for (var i = 1; i <= 12; i++) {
        result = response.mul(x, i)
        console.log("x*" + i + "=" + result)
    }
    stdin.destroy()
});

