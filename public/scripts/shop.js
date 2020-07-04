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


const modelos = [
    "Adriática",

    "Antarctica Cristal",
    "Antarctica Pilsen",

    "Antarctica Subzero",

    "Beck's",

    "Bohemia 14-Weiss",
    "Bohemia 838 Pale Ale",
    "Bohemia Aura Larger",
    "Bohemia Escura",
    "Bohemia Imperial",
    "Bohemia Magna Pils",
    "Bohemia Puro Malte",

    "Brahma Chopp",
    "Brahma Extra Larger",
    "Brahma Extra Red Larger",
    "Brahma Extra Weiss",
    "Brahma Malzbier",
    "Brahma Refresh",
    "Brahma Zero",

    "Budweiser",

    "Caracu",

    "Colorado Apia",
    "Colorado Berthô",
    "Colorado Cauim",
    "Colorado Cauim 016",
    "Colorado Demoiselle",
    "Colorado Eugênia",
    "Colorado Guanabara",
    "Colorado Indica",
    "Colorado Ithaca",
    "Colorado Murica",
    "Colorado Nassau",
    "Colorado Ribeirão Lager",
    "Colorado Rosália",
    "Colorado Vixnu", 

    "Corona",
    "Corona",

    "Franziskaner Dunkel",

]

const categoria = [
    "Premium American Larger", //Adriática
    
    "American Larger", //Antarctica Cristal

    "American Larger", //Antarctica Pilsen

    "American Larger", //Antarctica Subzero

    "German Pilsner", //Beck's

    "German Weizen", //Bohemia
    "Pale Ale", //Bohemia
    "Vienna Lager",//Bohemia
    "German Schwarzbier",//Bohemia
    "Premium American Lager", //Bohemia
    "German Pilsner", //Bohemia
    "Premium American Larger", //Bohemia PM    

    "American Larger", //Brahma
    "Premium American Larger", //Brahma
    "Brahma Amber Lager", //Brahma
    "German Weizen", //Brahma
    "American Pale Lager", //Brahma
    "American Lager", //Brahma
    "American Lager", //Brahma

    "American Lager", //Budweiser

    "Sweet Stout", //Caracu

    "Honey Wheat Ale", //Colorado
    "Double Brown Ale", //Colorado
    "Premium American Larger", //Colorado
    "Premium American Larger", //Colorado
    "Robust Porter", //Colorado
    "Session IPA", //Colorado
    "Russian Imperial Stout",//Colorado
    "India Pale Ale", //Colorado
    "Imperial Stout", //Colorado
    "Cream Ale", //Colorado
    "White IPA", //Colorado
    "American Lager", //Colorado
    "Fruit Beer", //Colorado
    "Imperial IPA", //Colorado

    "American Lager", //Corona
    "American Lager", //Corona

    "German Weizen" //Frank

]

const teor = [
    "4,9% vol", //Adriática

    "5,4% vol", //Antarctica Cristal

    "4,7% vol", //Antarctica Pilsen

    "4,5% vol", //Antarctica Subzero
    
    "5% vol", //Beck's

    "4,3% vol", //Bohemia
    "5,4% vol", //Bohemia
    "5,4% vol", //Bohemia
    "4,95% vol", //Bohemia
    "5,2% vol", //Bohemia
    "4,8% vol", //Bohemia
    "4,95% vol", //Bohemia PM

    "4,8% vol", //Brahma
    "5,5% vol", //Brahma
    "5,2% vol", //Brahma
    "4,9% vol", //Brahma
    "3,8% vol", //Brahma
    "4,7% vol", //Brahma
    "0% vol", //Brahma

    "5% vol", //Budweiser

    "5,4% vol", //Caracu

    "5,5% vol", //Colorado
    "8% vol", //Colorado
    "4,5% vol", //Colorado
    "4,2% vol", //Colorado
    "6% vol", //Colorado
    "4,5% vol", //Colorado
    "10,5% vol", //Colorado
    "7% vol", //Colorado
    "10,5% vol", //Colorado
    "4,7% vol", //Colorado
    "5,8% vol", //Colorado
    "4,5% vol", //Colorado
    "4,5% vol", //Colorado
    "9,5% vol", //Colorado

    "4,6% vol", //Corona
    "4,6% vol", //Corona
    
    "5% vol", //Frank

]

const logo_url = [
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_adriatica.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_antarctica.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_antarctica.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_antarctica.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_becks.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bohemia.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_brahma.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_bud.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_caracu.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_colorado.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_corona.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_corona.jpg",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_franziskaner.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_franziskaner.jpg",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/logo_franziskaner.jpg",

]
const image_url = [
    "https://www.ambev.com.br/conteudo/uploads/2019/03/adriatica_600ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/antarctica-cristal_355ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/antarctica_1l.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/antarctica_subzero_1l.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/becks_330ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia-14-weiss_300ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia_838pale-ale_300ml-1.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia_aura-lager_300ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia-escura_350ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia-imperial_550ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia_magna-pils_300ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/bohemia_puro_malte_990ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_1l.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_extra_lager_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_extra_red-lager_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_extra_weiss_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_malzbier_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_refresh_1l.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/brahma_zero_355ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/budweiser_600ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/caracu_355ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/appia_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-bertho_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/cauim_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-cauim-016_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-demoiselle_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-eugenia_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-guanabara_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/indica_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-ithaca_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-murica_600ml.png ",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-nassau_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/11/colorado-ribeirao_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-rosalia_600ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-vixnu_600ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/corona_355ml.png",
    "https://www.ambev.com.br/conteudo/uploads/2019/03/coronita_210ml.png",

    "https://www.ambev.com.br/conteudo/uploads/2019/03/franziskaner_dunkel_500ml.png",

]