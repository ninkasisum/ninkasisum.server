const loginButton = document.getElementById('login')
const signButton = document.getElementById('sign-up')
const loginDisplay = document.getElementById('login-content')


console.log(loginButton)
console.log(signButton)

loginButton.addEventListener('click', ()=>{
    loginButton.classList.remove('active')
    loginButton.classList.add('active')
    signButton.classList.remove('active')
    console.log('clicou login')
})
signButton.addEventListener('click', ()=>{
    signButton.classList.remove('active')
    signButton.classList.add('active')
    loginButton.classList.remove('active')
    loginDisplay.classList.add('none')
    console.log('clicou sign')
})