// setInterval============================================================================
/*
// to launch setInterval:
setInterval(function () {
    console.log('Fired!')
}, 1000)
*/

// to launch setInterval and then stop it:
/*
const timerIntervalID = setInterval(function () {
    console.log('Fired!')
}, 1000)
clearInterval(timerIntervalID)
*/

// setTimeOut=============================================================================

// to launch timeout:
/*
setTimeout(function () {
    console.log('setTimeout Fired!')
}, 2000)
*/

// to launch timeout and stop it:
/*
const timerID = setTimeout(function () {
    console.log('setTimeout Fired!')
}, 2000)

clearInterval(timerID)
*/

// setTimeOut + setInterval===============================================================
// to lanch Interval and stop it using timeout and clearInterval:
/*
const timerID = setInterval(function () {
    console.log('setInterval Fired!')
}, 1000)

setTimeout(function () {
    clearInterval(timerID)
}, 20000)
*/

// practicing=============================================================================
// секундомер
// basic variant==========================================================================
/*
//create const to deal with html element
const counterElement = document.querySelector('#counter')
// create a variable let (because it is going to change)
let counter = 0

setInterval(function () {
    //counter = counter + 1
    //counter += 1
    counter++
    //console.log(counter)
    //put the value of the counter to html element wich we found with querySelector
    counterElement.innerText = counter
}, 1000)
*/

// variant with buttons you can press to manage===========================================
//create const to deal with html element
const counterElement = document.querySelector('#counter')
// create a variable let (because it is going to change)
let counter = 0
// create a variable to be able to manipulate for stopping and pausing
let timerID


// Start function (button)=========================
//to find the button Start on the page
const btnStart = document.querySelector('#start')
//add an evennt to deal with
btnStart.onclick = function () {
    timerID = setInterval(function () {
        console.log('btnStart')
        counter++
        counterElement.innerText = counter
    }, 1000)
    console.log('timerID', timerID)
}

// Pause function (button)===========================
//to find the button Pause on the page
const btnPause = document.querySelector('#pause')
//add an evennt to deal with
btnPause.onclick = function () {
    console.log('btnPause')
    clearInterval(timerID)
}

// Reset function (button)===========================
//to find the button Reset on the page
const btnReset = document.querySelector('#reset')
//add an evennt to deal with
btnReset.onclick = function () {
    console.log('btnReset')
    counter = 0
    clearInterval(timerID)
    counterElement.innerText = counter
}