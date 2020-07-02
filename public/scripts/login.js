const loginButton = document.getElementById('login')
const signButton = document.getElementById('sign-in')

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
    console.log('clicou sign')
})