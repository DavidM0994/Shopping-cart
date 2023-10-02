const email = document.querySelector('.email');
const menuDesplegable = document.querySelector('.menuDesplegable');
const carrito = document.querySelector('.carrito');
const desktopMenu = document.querySelector('.desktopMenu');
const movilMenu = document.querySelector('.movilMenu');
const containerMain = document.querySelector('.containerMain');

const ContainerCrads_main = document.querySelector('.ContainerCrads_main')

const productDetailContainer = document.querySelector('.container_ProductInformation_secundary')
const logoClose_secundary = document.querySelector('.logoClose_secundary')
// -------------------------------------funcionalidad navbar-------------------------------------------------------------------------------------

function pliegueDespliegueMenuDesktop(){//si al dar click en el menu de email se desactiva los contenedores del carrito y la informacion del articulo
    const isCarritoOpen = !containerMain.classList.contains('inactive')
    const isProductInformation = !productDetailContainer.classList.contains('inactive')
    if((isCarritoOpen && isProductInformation)||(isCarritoOpen || isProductInformation)){
        containerMain.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
email.addEventListener('click', pliegueDespliegueMenuDesktop)

function pliegueDespliegueMenuMovile(){
    const isCarritoOpen = !containerMain.classList.contains('inactive')
    const isProductInformation = !productDetailContainer.classList.contains('inactive')
    if((isCarritoOpen && isProductInformation)||(isCarritoOpen || isProductInformation)){
        containerMain.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    movilMenu.classList.toggle('inactive')  
}
menuDesplegable.addEventListener('click', pliegueDespliegueMenuMovile)

// -----------------------------------aside-carrito-----------------------------------
function pliegueDesplieguecarrito(){
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isMovilMenuOpen = !movilMenu.classList.contains('inactive')
    const isProductInformation = !productDetailContainer.classList.contains('inactive')
    if((isDesktopMenuOpen && isProductInformation)||(isDesktopMenuOpen || isMovilMenuOpen || isProductInformation)){
        desktopMenu.classList.add('inactive')
        movilMenu.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    containerMain.classList.toggle('inactive')  
}
carrito.addEventListener('click', pliegueDesplieguecarrito)

// ------------------------------------aside-informacion productos-----------------------------------------------------------------------
function openProductInformation(){//--Cada vez que se de click en la imagen de cada articulo aparezca la informacion de esta con eñ evento click llamado abajo
    desktopMenu.classList.add('inactive')
    containerMain.classList.add('inactive')
    movilMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}
function closeProductInformation(){
    productDetailContainer.classList.add('inactive')
}
logoClose_secundary.addEventListener('click', closeProductInformation)

// -----------------------------------------cards - products ----------------------------------------------------------------------------------------
const productList = [];
                //  ---arreglos de cada producto que seran almacenados em el array productList--
productList.push({
    name: 'Desk',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_1280.jpg',
});
productList.push({
    name: 'Dining room',
    price: 100,
    image: 'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg',
});
productList.push({
    name: 'Desktop',
    price: 220,
    image: 'https://media.istockphoto.com/id/1461323034/es/foto/retro-90s-beige-home-pc-computer.jpg?s=1024x1024&w=is&k=20&c=PLvNfO8KVa-e8_KY5fZJd6WBVgnEzC_2LwlW-mHXYWs=',
});
productList.push({
    name: 'Smartphone',
    price: 200,
    image: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png',
});
productList.push({
    name: 'Desk',
    price: 150,
    image: 'https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_1280.jpg',
});
productList.push({
    name: 'Dining room',
    price: 130,
    image: 'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg',
});
productList.push({
    name: 'Desktop',
    price: 250,
    image: 'https://media.istockphoto.com/id/1461323034/es/foto/retro-90s-beige-home-pc-computer.jpg?s=1024x1024&w=is&k=20&c=PLvNfO8KVa-e8_KY5fZJd6WBVgnEzC_2LwlW-mHXYWs=',
});
productList.push({
    name: 'Smartphone',
    price: 230,
    image: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png',
});
                 //--Se maquetea la forma del contenedor hecho en html pero ahora en havascript donde se crea cada etiqueta,
                //cada classe con append y appendChild 
function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div')
        productCard.classList.add('Cards_main')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image) 
        img.addEventListener('click', openProductInformation) //Para cuando se haga click abra la ventana de informacion del producto, ademas al darse click se cieeran las otras ventanas, este procesos se ve en el condicional de arriba
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('containerInformation--product_main')
    
        const productInfoDiv = document.createElement('div')
        productInfoDiv.classList.add('container--description_main')
    
        const productPrice = document.createElement('h2')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        const imgIcon = document.createElement('img')
        imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, imgIcon)
        productCard.append(img, productInfo)
        ContainerCrads_main.appendChild(productCard)
    }
}
renderProducts(productList)
                


