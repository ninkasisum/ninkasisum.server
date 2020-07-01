/*//Autenticar Google Account
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}*/
//nav active
const active_feed = document.querySelector('.feed')
const active_line = document.querySelector('.line')

window.addEventListener('load', () => {
    let path = window.location.pathname.replace('/', '#')
    if (path.length == 1) {
        path += 'feed'
    }
    addClassActive(path)
})
//adicionando classe
function addClassActive(id) {
    ['#feed', '#perfil', '#shop'].forEach((e) => {
        const element = document.querySelector(e)
        const line = document.getElementById(`line${e}`)
        if (e == id) {
            element.classList.add('active')
            line.classList.add('active')
        }
        else {
            element.classList.remove('active')
            line.classList.remove('active')
        }
    })
}

//likezinho show mlk
const like = document.querySelector('.fa-heart')
var button_like = Boolean(false)

like.addEventListener('click', () => {
    if (!button_like) {
        like.classList.remove('far')
        like.classList.add('fas')
        button_like = true
    }
    else {
        like.classList.add('far')
        like.classList.remove('fas')
        button_like = false
    }
})

const logout = document.getElementById('logout')

logout.addEventListener("click", () => {
    createGist(`${window.location.origin}/api/logout`)
})

//resize textarea
var text = document.getElementById('mensagem');
function resize() {
    text.style.height = 'auto';
    text.style.height = text.scrollHeight + 'px';
}

['change', 'cut', 'paste', 'drop', 'keydown'].forEach((e) => {
    text.addEventListener(e, resize)
})

text.focus();
text.select();