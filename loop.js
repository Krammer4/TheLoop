

const logo = document.querySelector('.header__iconrow');

function refresh(){
    window.location.href = 'loop.html';
}

logo.addEventListener("click", refresh);

const footerLogo = document.querySelector('.footer__iconrow');
footerLogo.addEventListener("click", refresh);

const vk = document.querySelector('.footer__mediarow');
function gotoVk(){
    window.location.href = 'https://vk.com/shecallsmebladee';
}
vk.addEventListener("click", gotoVk);

