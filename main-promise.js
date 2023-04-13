// Promise================================================================================
/*
const myPromise = new Promise(function (resolve, reject) {
    console.log('Promise created')
    setTimeout(function () {
        //запрос на сервер
        const response = false;

        if (response) {
            let message = "SUCCESS"
            resolve(message)
        } else {
            let message = "FAILED"
            reject(message)
        }
    }, 1000)
});

myPromise.then(function (data) {
    console.log('Then')
    console.log(data)
}).catch(function (data) {
    console.log('Catch')
    console.log(data)
})
*/

// особенности работы промиса
/*
const myPromise = new Promise(function (resolve, reject) {
    console.log('Promise created')
    setTimeout(function () {
        //запрос на сервер
        const response = false;

        if (response) {
            let message = "SUCCESS"
            resolve(message)
        } else {
            let message = "FAILED"
            reject(message)
        }
    }, 1000)
}).then(function (data) {
    console.log('Then')
    console.log(data)
}).catch(function (data) {
    console.log('Catch')
    console.log(data)
})
*/

// особенности работы промиса
/*
const myPromise = new Promise(function (resolve, reject) {
    console.log('Promise created')
    setTimeout(function () {
        //запрос на сервер
        const response = true;

        if (response) {
            let message = "SUCCESS"
            resolve(message)
        } else {
            let message = "FAILED"
            reject(message)
        }
    }, 1000)
})
myPromise.then(function (data) {
    console.log('Then 1')
    console.log(data)
    return 'Data from then 1'
}).then(function (data) {
    console.log('Then 2')
    console.log(data)
    return 'Data from then 2'
}).catch(function (data) {
    console.log('Catch')
    console.log(data)
})
*/

// особенности работы промиса
//thenы могут срабатывать по разному, с разной задержкой
/*
const myPromise = new Promise(function (resolve, reject) {
    console.log('Promise created')
    setTimeout(function () {
        //запрос на сервер
        const response = true;

        if (response) {
            let message = "SUCCESS"
            resolve(message)
        } else {
            let message = "FAILED"
            reject(message)
        }
    }, 1500)
})
myPromise.then(function (data) {
    setTimeout(() => {
        console.log('Then 1')
        console.log(data)
    }, 1000)
}).then(function (data) {
    setTimeout(() => {
        console.log('Then 2')
    }, 1500)
}).catch(function (data) {
    console.log('Catch')
    console.log(data)
})
*/

// особенности работы промиса
//чтобы thenы срабатывали по порядку нужно
/*
const myPromise = new Promise(function (resolve, reject) {
    console.log('Promise created')
    setTimeout(function () {
        //запрос на сервер
        const response = true;

        if (response) {
            let message = "SUCCESS"
            resolve(message)
        } else {
            let message = "FAILED"
            reject(message)
        }
    }, 1500)
})
myPromise.then(function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Then 1')
            console.log(data)

            const response = false
            if (response) {
                resolve('Data from then 1')
            } else {
                reject('Data from then 1')
            }
        }, 1000)
    })
}).then(function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Then 2')
            console.log(data)
        }, 1500)
    })
}).catch(function (data) {
    console.log('Catch')
    console.log(data)
})
*/

// Цепочка промисов. Несколько промисов с setTimeout======================================
/*
const checkRooms = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('checkin availability rooms...')
        const availableRooms = true
        console.log(availableRooms)

        if (availableRooms) {
            resolve('Rooms available!')
        } else {
            reject('Rooms are not available...')
        }
    }, 1500)
})
checkRooms.then(function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('then 1.')
            console.log('answer from previous step:', data)
            console.log('checking availability tickets...')
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
}).then(function (data) {
    console.log('then 2.')
    console.log('answer from previous step:', data)
    console.log('going to have vacantion!')
}).catch(function (data) {
    console.log('Catch')
    console.log('answer from previous step:', data)
    console.log('stay home...')
})
*/
// Цепочка промисов. Несколько промисов с setTimeout======================================
// the same but a bit shorter with functions
/*
const checkRooms = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('checkin availability rooms...')
        const availableRooms = true
        console.log(availableRooms)

        if (availableRooms) {
            resolve('Rooms available!')
        } else {
            reject('Rooms are not available...')
        }
    }, 1500)
})

checkRooms.then(checkTickets).then(success).catch(failed)

function checkTickets(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('then 1.')
            console.log('answer from previous step:', data)
            console.log('checking availability tickets...')
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

function success(data) {
    console.log('success')
    console.log('answer from previous step:', data)
    console.log('going to have vacantion!')
}

function failed(data) {
    console.log('failed')
    console.log('answer from previous step:', data)
    console.log('stay home...')
}
*/

// Цепочка промисов. Несколько промисов с setTimeout======================================
// the same but a bit shorter with all functions
checkRooms().then(checkTickets).then(success).catch(failed)
//could write previous line more obvious look
/*checkRooms()
    .then(checkTickets)
    .then(success)
    .catch(failed)
    */

function checkRooms() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('checkin availability rooms...')
            const availableRooms = true
            console.log(availableRooms)

            if (availableRooms) {
                resolve('Rooms available!')
            } else {
                reject('Rooms are not available...')
            }
        }, 1500)
    })
}

function checkTickets(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('then 1.')
            console.log('answer from previous step:', data)
            console.log('checking availability tickets...')
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

function success(data) {
    console.log('success')
    console.log('answer from previous step:', data)
    console.log('going to have vacantion!')
}

function failed(data) {
    console.log('failed')
    console.log('answer from previous step:', data)
    console.log('stay home...')
}