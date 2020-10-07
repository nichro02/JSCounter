console.log('hello')

let total = 0

const currentTotal = () => {
    let currentTotal = document.querySelector('#displayNum')
    currentTotal.innerHTML = total 
}


const addToTotal = (event) => {
    let numToAdd = document.querySelector('#value')
    console.log(typeof parseInt(numToAdd.value))
    total += parseInt(numToAdd.value)
    console.log(total)
    currentNum = total
    currentTotal()
    addRedForNegative()
    return
}

const subtractFromTotal = (event) => {
    let numToSubtract = document.querySelector('#value')
    console.log(typeof parseInt(numToSubtract.value))
    total -= parseInt(numToSubtract.value)
    console.log(total)
    currentTotal()
    addRedForNegative()
    return 
}

const addRedForNegative = () => {
    if(total < 0) {
        let currentTotal = document.querySelector('#displayNum')
        currentTotal.classList.add('red')
    } else if(total >= 0) {
        let currentTotal = document.querySelector('#displayNum')
        currentTotal.classList.remove('red')
    }
}

const addButtonListeners = () => {
    const sumButton = document.querySelector('#add')
    const subButton = document.querySelector('#subtract')
    sumButton.addEventListener('click', addToTotal)
    subButton.addEventListener('click', subtractFromTotal)
}

const addMouseOverEvents = () => {
    const sumButton = document.querySelector('#add')
    const subButton = document.querySelector('#subtract')
    sumButton.addEventListener('mouseover', function(event) {
        event.target.style.background = 'black'
        event.target.style.color = 'grey'
        setTimeout(function() {
            event.target.style.background = ''
            event.target.style.color = '' 
        }, 500)
    }, false)
    subButton.addEventListener('mouseover', function(event) {
        event.target.style.background = 'black'
        event.target.style.color = 'grey'
        setTimeout(function() {
            event.target.style.background = ''
            event.target.style.color = '' 
        }, 500)
    }, false)
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    currentTotal()
    addButtonListeners()
    addMouseOverEvents()
})