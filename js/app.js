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


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    currentTotal()
    addButtonListeners()

})