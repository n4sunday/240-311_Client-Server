console.log("Enter Text");
process.stdin.on('data', function (data) {
    var str1  = data.toString()
    var str2  = data.reverse().toString()
    if (str1.trim() === str2.trim() && str1.trim().toUpperCase() === str2.trim().toUpperCase()) 
        console.log("Palidrome")
    else if (str1.trim().toUpperCase() === str2.trim().toUpperCase()) 
        console.log("Palidrome Non case sensitive")
    else
        console.log("Not Palidrome")
});
function reverse(txt) {
    let reversed = "";
    for (var i = txt.length - 1; i >= 0; i--)  Matreversed += txt[i];
    return reversed;
}