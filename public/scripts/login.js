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
        .replace(/(\d{3})(\d)/, '$1/$2')

        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        
        .replace(/(-\d{2})\d+?$/, '$1') 
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)

    }, false)
});

document.getElementById('btn-login').addEventListener('click', () => {
    const usr = document.getElementById('usr').value;
    const psw = document.getElementById('psw').value;

    createGist(`${window.location.origin}/api/login`, { usr, psw });
})

document.getElementById('btn-register').addEventListener('click',  () => {
    const name = document.getElementById('rname').value;
    const cnpj = document.getElementById('rcnpj').value;
    const usr  = document.getElementById('ruser').value;
    const psw  = document.getElementById('rpsw').value;

    createGist(`${window.location.origin}/api/user/create`, { name, cnpj, usr, psw });
})