const email = document.querySelector('.email');
const menuDesplegable = document.querySelector('.menuDesplegable');
const carrito = document.querySelector('.carrito');
const desktopMenu = document.querySelector('.desktopMenu');
const movilMenu = document.querySelector('.movilMenu');
const containerMain = document.querySelector('.containerMain');
// -------------------------------------navbar-------------------------------------

function pliegueDespliegueMenuDesktop(){
    const isCarritoOpen = !containerMain.classList.contains('inactive')
    if(isCarritoOpen){
        containerMain.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')  
}
email.addEventListener('click', pliegueDespliegueMenuDesktop)

function pliegueDespliegueMenuMovile(){
    const isCarritoOpen = !containerMain.classList.contains('inactive')
    if(isCarritoOpen){
        containerMain.classList.add('inactive')
    }
    movilMenu.classList.toggle('inactive')  
}
menuDesplegable.addEventListener('click', pliegueDespliegueMenuMovile)

// -----------------------------------aside-carrito-----------------------------------
function pliegueDesplieguecarrito(){
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isMovilMenuOpen = !movilMenu.classList.contains('inactive')
    if(isDesktopMenuOpen || isMovilMenuOpen){
        desktopMenu.classList.add('inactive')
        movilMenu.classList.add('inactive')
    }
    containerMain.classList.toggle('inactive')  
}
carrito.addEventListener('click', pliegueDesplieguecarrito)