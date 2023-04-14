// more Async functions. Using Promise====================================================
// how it works in general
/*
function promiseFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const res = false
            if (res) {
                resolve('Done!')
            } else {
                reject('Fail!')
            }
        }, 500)
    })
}
// console.log(promiseFunction())
async function startPromise() {
    try {
        const res = await promiseFunction()
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
startPromise()
*/

// example Async function. Chaine of promises=============================================

function checkRooms() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Checking available rooms in hotels...')
            //code wich send a request to the hotel
            let availableRooms = true;

            if (availableRooms) {
                let message = "A loot of rooms!"
                resolve(message)
            } else {
                let message = "Not any room..."
                reject(message)
            }
        }, 1500)
    })
}

function checkTickets(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('check tickets...')
            console.log('answer from previous step:', data)
            console.log('checking availability tickets...')
            //code wich send a request to the flyingcompany
            const availableTickets = true
            console.log(availableTickets)

            if (availableTickets) {
                let message = 'Tickets available!'
                resolve(message)
            } else {
                let message = 'Tickets are not available...'
                reject(message)
                console.log(message)
            }
        }, 1000)
    })
}

function submitVacation(data) {
    console.log('submitVacation')
    console.log('answer from previous step:', data)
    console.log('going to have vacantion!')
}

function cancelVacation(data) {
    console.log('cancelVacation')
    console.log('answer from previous step:', data)
    console.log('stay home...')
}
// ove variant of async function with IF and ELSE
/*
async function checkVacation() {
    const roomsResult = await checkRooms()
    const ticketsResult = await checkTickets(roomsResult)
    if (ticketsResult) {
        submitVacation(ticketsResult)
    } else {
        cancelVacation(ticketsResult)
    }
}
*/
// better variant of async function with TRY and CATCH
async function checkVacation() {
    try {
        const roomsResult = await checkRooms()
        const ticketsResult = await checkTickets(roomsResult)
        submitVacation(ticketsResult)
    } catch (err) {
        console.log(err)
        cancelVacation(err)
    }
}
checkVacation()
