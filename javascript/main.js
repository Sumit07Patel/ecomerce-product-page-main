
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
let counter = 1;

//we have two carosel so i have decided to use one function to run carosel so that i dont need to type every thing again
//function for carosel
function carosel(caroselSlide,caroselImg,previousButton,nextButton){
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
//for the thumbnailimg functionalitiy
function clickOnThumbnailImg(thumbnailImg,caroselSlide,caroselImg){
    function thumbnailClick(numberOfImage){
        thumbnailImg[numberOfImage-1].addEventListener('click', ()=>{
            // if(counter >= caroselImg.length-1) return;
            let size = caroselImg[0].clientWidth;
            counter= numberOfImage;
            caroselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        });
    }
    for(i=1; i <= thumbnailImg.length; i++){
        thumbnailClick(i);
    }
}

//required values for mainCarosel
const mainCaroselSlide = document.querySelector('.item-section .item-img-carosel');
const mainCaroselImg = document.querySelectorAll('.item-section .item-img-carosel img');
const mainPreviousButton = document.querySelector('.item-section .previous-button');
const mainNextButton = document.querySelector('.item-section .next-button');
const mainThumbnailImg = document.querySelectorAll('.item-section .thumbnail-item-img img');

//calling the function
carosel(mainCaroselSlide,mainCaroselImg,mainPreviousButton,mainNextButton);
clickOnThumbnailImg(mainThumbnailImg,mainCaroselSlide,mainCaroselImg);

//i was having the bug when the size is chaged so i called the function whenevre size is changed

//When the screen size is changed
window.addEventListener('resize', ()=>{
    carosel(mainCaroselSlide,mainCaroselImg,mainPreviousButton,mainNextButton);
    clickOnThumbnailImg(mainThumbnailImg,mainCaroselSlide,mainCaroselImg);
})


//samething for secondary carosel
const secondaryCaroselSlide = document.querySelector('.secondary-carosel .item-img-carosel');
const secondaryCaroselImg = document.querySelectorAll('.secondary-carosel .item-img-carosel img');
const secondaryPreviousButton = document.querySelector('.secondary-carosel .previous-button');
const secondaryNextButton = document.querySelector('.secondary-carosel .next-button');
const secondaryThumbnailImg = document.querySelectorAll('.secondary-carosel .thumbnail-item-img img');

//calling the function
carosel(secondaryCaroselSlide,secondaryCaroselImg,secondaryPreviousButton,secondaryNextButton);
clickOnThumbnailImg(secondaryThumbnailImg,secondaryCaroselSlide,secondaryCaroselImg);

//When the screen size is changed
window.addEventListener('resize', ()=>{
    carosel(secondaryCaroselSlide,secondaryCaroselImg,mainPreviousButton,secondaryNextButton);
    clickOnThumbnailImg(secondaryThumbnailImg,secondaryCaroselSlide,mainCaroselImg);
})










