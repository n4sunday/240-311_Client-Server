var response = require('./cal.js')
var sub = ['COMPUTER ARCITECTURE', 'OPEREATING SYSTEM', 'DATABASE',
    'NETWORK PROTOCOLS', 'ADVANCED LAB I', 'CMOS VLSI DESIGN', 
    'ETHICAL,LEGAL&SOCIAL ISSUES','ENGLISH FOR BUSINESS', 'DESIGN ARCHI&ENG FOR INTELLI']
var cr = [3, 3, 3, 3, 1, 3, 1, 3, 3]
var gp = ['B+','A', 'A', 'A', 'B','B+', 'A', 'D+', 'B+']
var gpa = {
    gpa:0,
    cumulative:0,
    credit:0
}
console.log("(subject) (credit) (grade)");
for (var i = 0; i < 9; i++) {
    console.log(sub[i] +"--"+cr[i]+"--"+gp[i])
    //console.log(parseFloat(response.calGPA(cr[i],gp[i])))
    gpa.cumulative = gpa.cumulative+parseFloat(response.calGPA(cr[i],gp[i]))
    gpa.credit =  gpa.credit+cr[i]
    //console.log(gpa.cumulative)
    //console.log(gpa.credit)
}   
    gpa.gpa = gpa.cumulative/gpa.credit
    console.log('GRADE POINT AVERAGE : '+gpa.gpa.toFixed(2)) 
    if(gpa.gpa > 0)
        console.log("ACADEMIC STATUS : Pass")
    else
        console.log("ACADEMIC STATUS : fail")