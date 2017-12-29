let banners  = ["Do lixo ao luxo!","Reaproveitar é aproveitar!"]

let bannerAtual = 0

function trocarBanner(){

    bannerAtual = (bannerAtual + 1) % 2

    document.querySelector('#banner').textContent = banners[bannerAtual]

}


function mudarTexto(){

setInterval(trocarBanner,1000)

}