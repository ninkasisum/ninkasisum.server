function load() {
    loadUserData();
    jsonLoadResource("shop").then(loadCards);
    addEventListenerToFilterCards();
    addEventListenerToFilterinput();

    addCarrinho();
    comprarAgora();

}

async function jsonLoadResource(name) {
    return await new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/resources/${name}.json`)
            .then(response => response.json())
            .then(resolve);
    });
}

function addEventListenerToFilterinput() {
    const input = document.getElementById("input-ft");
    input.addEventListener('input', (e) => {
        document.querySelectorAll(".filter-data").forEach((label) => {
            if (label.innerHTML.toLowerCase().search(input.value.toLowerCase()) === 0) {
                label.parentElement.style.display = "block";
            }
            else {
                label.parentElement.style.display = "none";
            }
        })

    })
}

function loadCards(data) {
    const { modelos, categorias, teores, logo_urls, image_urls } = data;
    const shopCards = document.getElementsByClassName('shop-cards')[0];

    for (let i = 0; i < modelos.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const logo = document.createElement('div');
        logo.setAttribute('class', 'beer-logo');

        const imgLogo = document.createElement('img');
        imgLogo.setAttribute('src', logo_urls[i]);

        logo.appendChild(imgLogo);
        card.appendChild(logo);

        const content = document.createElement('div');
        content.setAttribute('class', 'content');

        const modelo = document.createElement('h2');
        modelo.appendChild(document.createTextNode(modelos[i]));
        logo.appendChild(modelo);

        const imgContent = document.createElement('img');
        imgContent.setAttribute('src', image_urls[i]);
        imgContent.setAttribute('class', 'beer');
        content.appendChild(imgContent);

        const info = document.createElement('div');
        info.setAttribute('class', 'inform');

        const categoria = {
            element: document.createElement('h3'),
            text: document.createElement('h4')
        }

        categoria.element.appendChild(document.createTextNode('Categoria'));
        categoria.text.appendChild(document.createTextNode(categorias[i]));
        info.appendChild(categoria.element);
        info.appendChild(categoria.text);

        const teorAlcoolico = {
            element: document.createElement('h3'),
            text: document.createElement('h4')
        }

        teorAlcoolico.element.appendChild(document.createTextNode('Teor Alcoólico'));
        teorAlcoolico.text.appendChild(document.createTextNode(teores[i]));

        info.appendChild(teorAlcoolico.element);
        info.appendChild(teorAlcoolico.text);

        content.appendChild(info);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'button-card');

        const buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('class', 'button-add')
        buttonAdd.appendChild(document.createTextNode('Adicionar ao Carrinho'));

        const icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-shopping-basket');
        buttonAdd.appendChild(icon);

        const buttonBuy = document.createElement('button');
        buttonBuy.setAttribute('class', 'dif-button');
        buttonBuy.appendChild(document.createTextNode('COMPRAR AGORA'));

        buttons.appendChild(buttonAdd);
        buttons.appendChild(buttonBuy);
        content.appendChild(buttons);

        card.appendChild(content);
        shopCards.appendChild(card);

        card.setAttribute('data-modelo', modelos[i]); // temp gambi
    }
}

function addEventListenerToFilterCards() {
    document.querySelectorAll('.filter-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            const filters = document.querySelectorAll('.filter-data');
            const cards = document.querySelectorAll('.card');
            const models = [];
            filters.forEach((filter) => {
                if (filter.previousSibling.checked)
                    models.push(filter.innerText);
            })
        
            if (models.length > 0) {
                cards.forEach((card) => {
                    const product = card.getAttribute('data-modelo');
                    if (product) {
                        const model = product.split(' ')[0];
                        card.style.display = (models.includes(model))?'flex':'none';
                    }
                })
            } else cards.forEach((card) => card.style.display = 'flex');

            document.querySelector('.dif').style.display = 'none'; // work around because is to late
        })
    })
}

function addCarrinho(){
    const button = document.getElementsByClassName('button-add');   
    const valor=0;
    
    button.addEventListener('click', ()=>{
        valor+= 53.5
        console.log(valor);
    })
}

function comprarAgora(){
    const button = document.getElementsByClassName('dif-button')

    button.addEventListener('click', ()=>{
        console.log('Cliquei no botão de Comprar Agora')
    })
}