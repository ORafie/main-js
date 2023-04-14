// Fetch example. Curency exchange========================================================
// example with Fetch and Promises, receiving data via API
// https://www.cbr-xml-daily.ru/daily_json.js

//1. Get Data from a server

//1.1. via chain of Thens
/*
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function (data) {
        return data.json()
    }).then(function (data) {
        console.log(data)
    })
    */
//1.2. via async function
/*
async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json()
    let usdRate = data.Valute.USD.Value.toFixed(2)
    let eurRate = data.Valute.EUR.Value.toFixed(2)
    console.log('Euro', eurRate, 'USD', usdRate)

    // 2. Show the data on the page
    const usdElement = document.querySelector('#usd')
    const eurElement = document.querySelector('#eur')

    usdElement.innerText = usdRate
    eurElement.innerText = eurRate
}

getCurrencies()
*/

//3. experiment
//3.1. Get Data from a server via async function

async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json()

    // 3.2. Show the data on the page
    renderRates(data)
}
getCurrencies()

function renderRates(data) {
    let usdRate = data.Valute.USD.Value.toFixed(2)
    let eurRate = data.Valute.EUR.Value.toFixed(2)
    console.log('Euro', eurRate, 'USD', usdRate)

    const usdElement = document.querySelector('#usd')
    const eurElement = document.querySelector('#eur')

    usdElement.innerText = usdRate
    eurElement.innerText = eurRate
}