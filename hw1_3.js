var response = require('./cal.js')
console.log("Enter Celsius:");

process.stdin.on('data', function (x) {
    console.log(response.CtoF(x)+" Fahrenheit")
    console.log(response.CtoK(x)+" Kelvin")
});