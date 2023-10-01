const email = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktopMenu');
const movilMenu = document.querySelector('.movilMenu');
const menuDesplegable = document.querySelector('.menuDesplegable');

function pliegueDespliegueMenuDesktop(){
    desktopMenu.classList.toggle('inactive')  
}
email.addEventListener('click', pliegueDespliegueMenuDesktop)

function pliegueDespliegueMenuMovile(){
    movilMenu.classList.toggle('inactive')  
}
menuDesplegable.addEventListener('click', pliegueDespliegueMenuMovile)


