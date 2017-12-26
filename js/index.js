let banners  = ["Os melhores do Brasil!","Qualidade e preço baixo!"]

let bannerAtual = 0

function trocarBanner(){

    bannerAtual = (bannerAtual + 1) % 2

    document.querySelector('#banner').textContent = banners[bannerAtual]

}

setInterval(trocarBanner,2000)