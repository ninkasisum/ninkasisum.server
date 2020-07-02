const loginButton = document.getElementById('login')
const signButton = document.getElementById('sign-up')
const loginDisplay = document.getElementById('login-content')
const signDisplay = document.getElementById('sign-content')

loginButton.addEventListener('click', ()=>{
    loginButton.classList.remove('active')
    loginButton.classList.add('active')
    loginDisplay.classList.remove('none')
    signButton.classList.remove('active')
    signDisplay.classList.remove('none')
    signDisplay.classList.add('none')
})
signButton.addEventListener('click', ()=>{
    signButton.classList.remove('active')
    signButton.classList.add('active')
    loginButton.classList.remove('active')
    loginDisplay.classList.add('none')
    signDisplay.classList.remove('none') 
})