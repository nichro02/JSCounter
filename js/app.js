console.log('hello')

let total = 0

const currentTotal = () => {
    let currentTotal = document.querySelector('#displayNum')
    currentTotal.innerHTML = total
}

const addToTotal = (event) => {
    let currentNum = document.querySelector('#displayNum').innerHTML
    //let convertedNum = parseInt(currentNum)
    let numToAdd = document.querySelector('#value')
    //console.log(typeof currentNum)
    //console.log(typeof convertedNum)
    console.log(typeof parseInt(numToAdd.value))
    //convertedNum += parseInt(numToAdd.value)
    total += parseInt(numToAdd.value)
    console.log(total)
    //console.log(convertedNum)
    currentNum = total
    console.log(currentNum)
    currentTotal()
    return
}

const subtractFromTotal = (event) => {
    let currentNum = document.querySelector('#displayNum').innerHTML
    let numToSubtract = document.querySelector('#value')
    console.log(typeof parseInt(numToSubtract.value))
    //currentNum = total
    total -= parseInt(numToSubtract.value)
    console.log(total)
    currentTotal()
    return 
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