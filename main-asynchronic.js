// Callback. Callback hell================================================================

// example of the way of reading the code
// we see in console 1.Start 2.Finish! 3.Print after 2000ms
/*
console.log('Start')

setTimeout(function () {
    console.log('Print after 2000ms')
}, 2000)

console.log('Finish!')
*/


//to see in console 1.Start 2.Print after 2000ms 3.Finish! we should write
/*
setTimeout(function () {
    console.log('1. Start')
    setTimeout(function () {
        console.log('2. Print after 2000ms')
        setTimeout(function () {
            console.log('3. Finish!')
        }, 1000)
    }, 1500)
}, 2000)
*/

// one more example of callback function==================================================
/*
function checkRooms() {
    setTimeout(function () {
        console.log('1. check of availability of hotel rooms...')
        const availableRooms = true

        if (availableRooms) {
            console.log('2. there are available rooms')
            console.log('3. going to have vacantion')
        } else {
            console.log('2. there are not available rooms')
            console.log('3. going to stay home')
        }
    }, 1000)
}

checkRooms()
*/

// one more example of callback function==================================================
// 1.check availability of hotel rooms
// 3.decide about vacation
/*
function checkRooms() {
    setTimeout(function () {
        console.log('1. check of availability of hotel rooms...')
        const availableRooms = false

        if (availableRooms) {
            let message = 'there are available rooms'
            submitVacation(message)
        } else {
            let message = ' there are not available rooms'
            cancelVacation(message)
        }
    }, 1000)
}
checkRooms()

function cancelVacation(message) {
    console.log('2. cancelVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to stay home')
}

function submitVacation(message) {
    console.log('2. submitVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to have vacantion')
}
*/

// one more example of callback function==================================================
// 1.check availability of hotel rooms
// 3.decide about vacation
/*
function checkRooms(success, failed) {
    setTimeout(function () {
        console.log('1. check of availability of hotel rooms...')
        const availableRooms = false

        if (availableRooms) {
            let message = 'there are available rooms'
            success(message)
        } else {
            let message = ' there are not available rooms'
            failed(message)
        }
    }, 1000)
}
checkRooms(submitVacation, cancelVacation)

function cancelVacation(message) {
    console.log('2. cancelVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to stay home')
}

function submitVacation(message) {
    console.log('2. submitVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to have vacantion')
}
*/

// one more example of callback function==================================================
// 1.check availability of hotel rooms
// 3.decide about vacation
/*
function checkRooms(success, failed) {
    setTimeout(function () {
        console.log('1. check of availability of hotel rooms...')
        const availableRooms = true

        if (availableRooms) {
            let message = 'there are available rooms'
            success(message)
        } else {
            let message = ' there are not available rooms'
            failed(message)
        }
    }, 1000)
}

checkRooms(function (messageFromCheckRooms) {
    submitVacation(messageFromCheckRooms)
}, function (messageFromCheckRooms) {
    cancelVacation(messageFromCheckRooms)
})

function cancelVacation(message) {
    console.log('2. cancelVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to stay home')
}

function submitVacation(message) {
    console.log('2. submitVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to have vacantion')
}
*/

// one more example of callback function==================================================
// 1.check availability of hotel rooms
// 2.check availability of tickets
// 3.decide about vacation

function checkRooms(success, failed) {
    setTimeout(function () {
        console.log('1. check of availability of hotel rooms...')
        const availableRooms = true

        if (availableRooms) {
            let message = 'there are available rooms'
            success(message)
        } else {
            let message = ' there are not available rooms'
            failed(message)
        }
    }, 1000)
}

function checkTickets(message, success, failed) {
    setTimeout(function () {
        console.log('checkTickets')
        console.log('answer from 1.step:', message)

        console.log('checking tickets...')
        const availableTickets = true

        if (availableTickets) {
            let message = 'there are available tickets'
            success(message)
        } else {
            let message = ' there are not available tickets'
            failed(message)
        }
    }, 500)
}

function cancelVacation(message) {
    console.log('2. cancelVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to stay home')
}

function submitVacation(message) {
    console.log('2. submitVacation')
    console.log('3. answer from 1.step:', message)
    console.log('4. going to have vacantion')
}
/*
checkRooms(
    function (messageFromCheckRooms) {
        checkTickets(
            messageFromCheckRooms,
            function (messageFromCheckTickets) {
                submitVacation(messageFromCheckTickets)
            },
            function (messageFromCheckTickets) {
                cancelVacation(messageFromCheckTickets)

            })
    },
    function (messageFromCheckRooms) {
        cancelVacation(messageFromCheckRooms)
    })
*/
// the same checkRooms but shorter
checkRooms(
    function (messageFromCheckRooms) {
        checkTickets(
            messageFromCheckRooms,
            submitVacation,
            cancelVacation)
    },
    cancelVacation
)