const buttonLogin = document.getElementById('login')

buttonLogin.addEventListener('click', () => {
    const inputMail = document.getElementById('mail')
    const inputPassword = document.getElementById('password')

    if (localStorage.getItem('datesUser')) {
        let dates = JSON.parse(localStorage.getItem('datesUser'))

        if (dates.mail === inputMail.value && dates.password === inputPassword.value) {
            setTimeout(() => {
                location.replace('https://finalprojectonejs.lauty.dev/calculator.html')
            }, 500)
        }

    }
})