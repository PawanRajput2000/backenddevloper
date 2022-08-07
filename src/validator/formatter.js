// third1 is used to trim the space part from the string or text
function third1(){
    let a = "        pawan rajput          "
    let c = a.trim()
    console.log(c)
}

function lower(){
    let a = "PAWAN raJPUt"
    let c = a.toLowerCase()
    console.log(c)
}

function upper(){
    let a = "pawan RAjput"
    let c = a.toUpperCase()
    console.log(c)
}

module.exports.third1 = third1
module.exports.lower = lower
module.exports.upper = upper