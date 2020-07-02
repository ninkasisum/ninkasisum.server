//login e sign button
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

//marcara para cnpj
const masks = {
    cnpj (value) {
        return value
        .replace(/\D/g, '') 
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')

        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        
        .replace(/(-\d{2})\d+?$/, '$1') //limitar o campo para qnt de numeros do cpf
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)

    }, false)
}) 