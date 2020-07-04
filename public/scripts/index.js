async function load() {
    const user = await loadUserData(); 
    
    const userName = document.getElementById('user-name')
    const textNome = document.createTextNode(user.name);

    userName.appendChild(textNome)
}

//likezinho show mlk
const like = document.querySelector('.fa-heart')
var button_like = false

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