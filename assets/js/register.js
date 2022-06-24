const buttonRegister = document.getElementById('register')

buttonRegister.addEventListener('click', () => {
    const inputMail = document.getElementById('mail')
    const inputPassword = document.getElementById('password')

    let dates = {
        mail: inputMail.value,
        password: inputPassword.value
    }
    
    let datesJson = JSON.stringify(dates)
    localStorage.setItem('datesUser', datesJson)

    setTimeout(() => {
        location.replace('https://finalprojectonejs.lauty.dev/login.html')
    }, 1000)
})