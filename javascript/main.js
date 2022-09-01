
//for hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerBar = document.querySelectorAll('.hamburger-bar');
const navLinks = document.querySelector('.nav-links');
const navBackground = document.querySelector('.open-mobile-nav-background');

hamburgerMenu.addEventListener("click", ()=>{
    navLinks.classList.toggle('show');
    navBackground.classList.toggle('show');
    for(i=0; i<hamburgerBar.length; i++){
        hamburgerBar[i].classList.toggle('close-menu');
    }
})

//we have two carosel so i have decided to use one function to run carosel so that i dont need to type every thing again
//function for carosel
function carosel(caroselSlide,caroselImg,previousButton,nextButton,thumbnailImg,lastClone,firstClone){
    let counter = 1;
    let size = caroselImg[0].clientWidth;
    caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

    //button listeners
    nextButton.addEventListener('click', ()=>{
        if(counter >= caroselImg.length-1) return;
        caroselSlide.classList.add('transition');
        counter++;
        console.log(counter);
        caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        // for(j=0; j<thumbnailImg.length; j++){
        //     thumbnailImg[j].classList.remove('click');
        //     imgWapper[j].classList.remove('click');
        // }
        // if(counter<thumbnailImg.length){
        //     thumbnailImg[counter].classList.add('click');
        //     imgWapper[counter].classList.add('click');
        // }
    })
    previousButton.addEventListener('click', ()=>{
        if(counter <= 0) return;
        caroselSlide.classList.add('transition');
        counter--;
        console.log(counter);
        caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        // for(j=0; j<thumbnailImg.length; j++){
        //     thumbnailImg[j].classList.remove('click');
        //     imgWapper[j].classList.remove('click');
        // }
        // if(counter<thumbnailImg.length){
        //     thumbnailImg[counter].classList.add('click');
        //     imgWapper[counter].classList.add('click');
        // }
    })
    //for the thumbnailimg functionalitiy
    function clickOnThumbnailImg(thumbnailImg,caroselSlide,    caroselImg){
        function thumbnailClick(numberOfImage){
            thumbnailImg[numberOfImage-1].addEventListener    ('click', ()=>{
                // if(counter >= caroselImg.length-1) return;
                let size = caroselImg[0].clientWidth;
                counter= numberOfImage;
                console.log(counter);
                caroselSlide.style.transform = 'translateX('    +(-size*counter)+'px)';
                caroselSlide.classList.add('transition');
                for(j=0; j<thumbnailImg.length; j++){
                    thumbnailImg[j].classList.remove('click');
                    imgWapper[j].classList.remove('click');
                }
                if(counter<=thumbnailImg.length){
                    thumbnailImg[counter-1].classList.add('click');
                    imgWapper[counter-1].classList.add('click');
                }
            });
        }
        for(i=1; i <= thumbnailImg.length; i++){
            thumbnailClick(i);
        }
    }
     clickOnThumbnailImg(thumbnailImg,caroselSlide, caroselImg);
     console.log(counter);
     //looping when transition end
     caroselSlide.addEventListener('transitionend', ()=>{
        if(caroselImg[counter].id === lastClone){
            caroselSlide.classList.remove('transition');
            counter = caroselImg.length - 2;
            caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        }
        if(caroselImg[counter].id === firstClone){
            caroselSlide.classList.remove('transition');
            counter = caroselImg.length - counter;
            caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        }
     })
    

     return 0;
}


//required values for mainCarosel
const mainCaroselSlide = document.querySelector('.item-section .item-img-carosel');
const mainCaroselImg = document.querySelectorAll('.item-section .item-img-carosel img');
const mainPreviousButton = document.querySelector('.item-section .previous-button');
const mainNextButton = document.querySelector('.item-section .next-button');
const mainThumbnailImg = document.querySelectorAll('.item-section .thumbnail-item-img img');
const imgWapper = document.querySelectorAll('.thumbnail-item-img .img-wrapper');//ised for effect
const mainFirstClone = 'firstClone';
const mainLastClone = 'lastClone';

//calling the function
carosel(mainCaroselSlide,mainCaroselImg,mainPreviousButton,mainNextButton,mainThumbnailImg,mainLastClone,mainFirstClone);

//i was having the bug when the size is chaged so i called the function whenevre size is changed

//When the screen size is changed
window.addEventListener('resize', ()=>{
    carosel(mainCaroselSlide,mainCaroselImg,mainPreviousButton,mainNextButton,mainThumbnailImg,mainLastClone,mainFirstClone);
})


//samething for secondary carosel
const secondaryCaroselSlide = document.querySelector('.secondary-carosel .item-img-carosel');
const secondaryCaroselImg = document.querySelectorAll('.secondary-carosel .item-img-carosel img');
const secondaryPreviousButton = document.querySelector('.secondary-carosel .previous-button');
const secondaryNextButton = document.querySelector('.secondary-carosel .next-button');
const secondaryThumbnailImg = document.querySelectorAll('.secondary-carosel .thumbnail-item-img img');
const secondaryFirstClone = 'secondaryFirstClone';
const secondaryLastClone = 'secondaryLastClone';

//calling the function
carosel(secondaryCaroselSlide,secondaryCaroselImg,mainPreviousButton,secondaryNextButton,secondaryThumbnailImg,secondaryFirstClone,secondaryLastClone);

//When the screen size is changed
window.addEventListener('resize', ()=>{
    carosel(secondaryCaroselSlide,secondaryCaroselImg,secondaryPreviousButton,secondaryNextButton,secondaryThumbnailImg,secondaryFirstClone,secondaryLastClone);
})


//open secondary carosel when we click on main img

const secondaryCarosel = document.querySelector('.secondary-carosel');
mainCaroselSlide.addEventListener('click', ()=>{
    secondaryCarosel.classList.add('show');
})

//closing secondary carosel

const closeButton = document.querySelector('.secondary-carosel .closeButton');

closeButton.addEventListener('click', ()=>{
    secondaryCarosel.classList.remove('show');
})
//toggle cart menu wih nav addtocart button
const navAddToCart = document.querySelector('.nav-buttons .cart svg');
const cartMenu = document.querySelector('.nav-buttons .cart-menu');
navAddToCart.addEventListener('click', ()=>{
    cartMenu.classList.toggle('show');
})


//for cart 
const addToCartButton = document.querySelector('#addToCartButton');
const numberOfItems = document.querySelector('#numberOfItems');
const cartItems = document.querySelector('.cart-items');
let numberOfItemsCounter = 0;
const addItems = document.querySelector('#plusItemNumbers');
const removeItems = document.querySelector('#minusItemNumbers');
const emptyCartMenu = document.querySelector('.empty-cart');
const purchaseItems = document.querySelector('.purchase-items');
const price = 125;
const currentPriceOnButton = document.querySelectorAll('#current-price h3')[1];
const currentPriceOnCart = document.querySelector('.purchase-item-price .current-price');
const numberOfItemsOnCart = document.querySelector('.purchase-item-price .number-of-items');
const purchaseAmountOnCart = document.querySelector('.purchase-amount');

addItems.addEventListener('click', ()=>{
    numberOfItemsCounter++;
    numberOfItems.innerText = numberOfItemsCounter;
})
removeItems.addEventListener('click', ()=>{
    if(numberOfItemsCounter > 0){
        numberOfItemsCounter--;
        numberOfItems.innerText = numberOfItemsCounter;
    }
})
currentPriceOnCart.innerText = currentPriceOnCart.innerText+price;
currentPriceOnButton.innerText = price;
let totalItems = 0;
addToCartButton.addEventListener('click', ()=>{
    cartItems.classList.add('show')
    cartItems.innerText = numberOfItems.innerText;
    if(numberOfItemsCounter>0){
        emptyCartMenu.style.display='none';
        purchaseItems.style.display = 'flex';
        numberOfItemsOnCart.innerText = numberOfItemsCounter;
        purchaseAmountOnCart.innerText = price*numberOfItemsCounter;
        }
    else{
        emptyCartMenu.style.display='flex';
        purchaseItems.style.display = 'none';
    }
    totalItems = totalItems+numberOfItemsCounter;
})

const deleteButton = document.querySelector('.remove-purchase-item');
deleteButton.addEventListener('click', ()=>{
        emptyCartMenu.style.display='flex';
        purchaseItems.style.display = 'none';
})














