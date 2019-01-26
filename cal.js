var GPA = 0
var calGPA = function (credit, grade) {
    var g = grade.toString()
    if (g.trim() === 'A') {
        return parseFloat(4 * credit)
    } else if (g.trim() === 'B+') {
        return parseFloat(3.5 * credit)
    }else if (g.trim() === 'B') {
        return parseFloat(3 * credit)
    }else if (g.trim() === 'C+') {
        return parseFloat(2.5 * credit)
    }else if (g.trim() === 'C') {
        return parseFloat(2 * credit)
    }else if (g.trim() === 'D+') {
        return parseFloat(1.5 * credit)
    }else if (g.trim() === 'D') {
        return parseFloat(1 * credit)
    }else if (g.trim() === 'E') {
        return parseFloat(0 * credit)
    }
}

var mul = function (x, y) {
    return x * y
}

var CtoF = function (CtoF) {
    a = (parseFloat(CtoF) * 1.8) + 32
    return a
}

var CtoK = function (CtoK) {
    b = (parseFloat(CtoK) + 273.15)
    return b.toFixed(2)
}
exports.calGPA = calGPA;
exports.mul = mul;
exports.CtoF = CtoF;
exports.CtoK = CtoK;
exports.GPA = GPA;