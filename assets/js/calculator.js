const addition = document.getElementById('addition')
const subtraction = document.getElementById('subtraction')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')


addition.addEventListener('click', () => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber + secondNumber

    document.getElementById('result').innerHTML = 'Resultado: ' + result
})

subtraction.addEventListener('click', () => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber - secondNumber

    document.getElementById('result').innerHTML = 'Resultado: ' + result
})

multiplication.addEventListener('click', () => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber * secondNumber

    document.getElementById('result').innerHTML = 'Resultado: ' + result
})

division.addEventListener('click', () => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber / secondNumber

    document.getElementById('result').innerHTML = 'Resultado: ' + result
})