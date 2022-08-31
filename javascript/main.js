
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



//for the carosel



const caroselSlide = document.querySelector('.item-img-carosel');
const caroselImg = document.querySelectorAll('.item-img-carosel img');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

function carosel(){
    let counter = 1;
    let size = caroselImg[0].clientWidth;
    caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

    //button listeners
    nextButton.addEventListener('click', ()=>{
        if(counter >= caroselImg.length-1) return;
        caroselSlide.classList.add('transition');
        counter++;
        caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    })
    previousButton.addEventListener('click', ()=>{
        if(counter <= 0) return;
        caroselSlide.classList.add('transition');
        counter--;
        caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    })
    caroselSlide.addEventListener('transitionend', ()=>{
        if(caroselImg[counter].id === 'lastClone'){
            caroselSlide.classList.remove('transition');
            counter = caroselImg.length - 2;
            caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        }
        if(caroselImg[counter].id === 'firstClone'){
            caroselSlide.classList.remove('transition');
            counter = caroselImg.length - counter;
            caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        }
    })
     return 0;
}
carosel();

//When the screen size is changed
window.addEventListener('resize', ()=>{
    carosel();
})

//for desktop product interface

const thumbnailImg = document.querySelectorAll('.thumbnail-item-img img');
var newCounter;
for(i=0; i<thumbnailImg.length; i++){
    thumbnailImg[i].addEventListener('click', ()=>{
        if(counter >= caroselImg.length-1) return;
        caroselSlide.classList.add('transition');
        counter= i+1;
        caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    })
}




