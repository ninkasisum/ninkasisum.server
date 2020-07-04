function load() {
    const config = {
        "dif-user-name": {
            prop: 'innerText',
            path: ['Qt', 'zW']
        },
        "dif-user-img": {
            prop: 'src',
            path: ['Qt', 'cL']
        }
    }

    loadUserData(config);
}

//array de marcas da ambev
const marcas = [
    "Adriática",
    "Antarctica",
    "Becks",
    "Bohemia",
    "Brahma",
    "Budweiser",
    "Caracu",
    "Cervejaria Colorado",
    "Corona",
    "Franziskaner",
    "Goose Island",
    "Hertog Jan",
    "Hoegaarden",
    "Leffe",
    "Legítima",
    "Löwenbräu",
    "Magnífica do Maranhão",
    "Norteña",
    "Nossa",
    "Original",
    "Patagonia",
    "Polar",
    "Quilmes",
    "Serramalte",
    "Serrana",
    "Skol",
    "Stella Artois",
    "Três Fidalgas",
    "Wäls"
]

/*marcas.forEach((marca) =>{
    document.createElement(input)
})*/

function adcElemento () { 
    // cria um novo elemento div 
    // e dá à ele conteúdo
    var divNova = document.createElement("div"); 
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!"); 
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada 
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    var divAtual = document.getElementById("div1"); 
    document.body.insertBefore(divNova, divAtual); 
  }