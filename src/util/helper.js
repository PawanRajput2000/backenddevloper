function printDate(){
    const date = new Date()
    const d = date.toDateString()
    console.log("today date is : " + d)
}

function printMonth(){
    const month = new Date().toDateString('default',{month: 'long'})
    console.log("this is month of "+month)
}

function getBatchInfo(){
    console.log("batch name is plutonium , 3 week , 5th day ,the topic for today is Nodejs module system")
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.getBatchInfo = getBatchInfo