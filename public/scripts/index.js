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

//resize textarea
var text = document.getElementById('mensagem');
var textArea = document.getElementById('mensagem-area')

function resize() {
    text.style.height = 'auto';
    textArea.style.height = 'auto';
    text.style.height = text.scrollHeight + 'px';
    textArea.style.height = (text.scrollHeight + 100) +'px';
}

['change', 'cut', 'paste', 'drop', 'keydown'].forEach((e) => {
    text.addEventListener(e, resize)
})

text.focus();
text.select();