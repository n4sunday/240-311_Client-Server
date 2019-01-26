var response = require('./cal.js')
console.log("Enter Number x:");
process.stdin.on('data', function (x) {
    var y = x.toString()
    for (var i = 1; i <= 12; i++) {
        result = response.mul(x, i)
        console.log("x*" + i + "=" + result)
    }
});

