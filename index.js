// /* Your Code Here */

// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Your code here
function createEmployeeRecord(array){
    return {
        firstName: array[0] ,
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents :[],
        timeOutEvents:[] 
    }

}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(time){
    const timeArray = time.split(" ")
    this.timeInEvents.push({
        type:"TimeIn",
        date:timeArray[0],
        hour:parseInt(timeArray[1])
    })
    return this
}

function createTimeOutEvent(time){
    const timeArray = time.split(" ")
    this.timeOutEvents.push({
        type:"TimeOut",
        date:timeArray[0],
        hour:parseInt(timeArray[1])
    })
    return this
}

function hoursWorkedOnDate(date){
    //uses date given to check if it matches the timeIn and timeOut dates
    //loop through the object to find the date that matches the one given
    //if they match then find the hours and find the difference 
    let clockIn=0
    let clockOut=0
    this.timeInEvents.forEach(element => {
        if (date===element.date){
            clockIn=element.hour
        }
    });
    
    this.timeOutEvents.forEach(element => {
        if (date===element.date){
            clockOut=element.hour
        }
    });
    let workedHours = (clockOut-clockIn)/100
    return workedHours
}

function wagesEarnedOnDate(date){

    let payRate = this.payPerHour*hoursWorkedOnDate.call(this,date)
    return parseFloat(payRate.toString())
}

// function allWagesFor(this){
//     let dates=this.timeInEvents.map(event => event.date)
//     let allWages=0
//     for(let i=0;i<dates.length;i++){
//         allWages += wagesEarnedOnDate(this,dates[i])
//     }

//     return allWages
// }

function findEmployeeByFirstName(array,name){
    console.log(array.length)
    console.log(name)


    return array.find((record) => record.firstName === name)

    
    // for(let i=0;i<array.length;i++){
    //     if(array[i].firstName===name){
    //         return array[i].firstName
    //     }
    // }
}


function calculatePayroll(employeeRecords){
    let totalWage=0
    for(let i=0;i<employeeRecords.length;i++){
        totalWage += allWagesFor.call(employeeRecords[i])

    }
    return totalWage
}

