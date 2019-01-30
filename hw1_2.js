var response = require('./cal.js')
let stdin = process.openStdin()
console.log("Enter Multiplicand:");
stdin.addListener('data', (x) => {
    var m = x.toString().trim()
    console.log("Enter Multiplier:");
    stdin.addListener('data', (z) => {
        var y = z.toString().trim()
        for (var i = 1; i <= z; i++) {
            result = response.mul(x, i)
            console.log(m+"x" + i + "=" + result)
        }
        stdin.destroy()
    });
});

