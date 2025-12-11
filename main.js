// Quem somos botao
const quemsomos = {};
quemsomos["button"] = document.getElementById("quemsomos-displaybutton");
quemsomos["img"] = document.getElementById("quemsomos-img");
quemsomos["currentImg"] = 1;

quemsomos.button.addEventListener("click", (event) => {

    quemsomos.currentImg++;
    if (quemsomos.currentImg > 5) {
        quemsomos.currentImg = 1;
    }
    quemsomos.img.src = `assets/quemsomos${quemsomos.currentImg}.png`;

})

// Nossa historia botao
const nossahistoria = {};
nossahistoria["button"] = document.getElementById("nossahistoria-displaybutton");
nossahistoria["img"] = document.getElementById("nossahistoria-img");
nossahistoria["currentImg"] = 1;

nossahistoria.button.addEventListener("click", (event) => {

    nossahistoria.currentImg++;
    if (nossahistoria.currentImg > 4) {
        nossahistoria.currentImg = 1;
    }
    nossahistoria.img.src = `assets/nossahistoria${nossahistoria.currentImg}.png`;

})