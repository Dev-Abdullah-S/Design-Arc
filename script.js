let btnNext = document.getElementById('hero-img-next');
let btnPrev = document.getElementById('hero-img-prev');
let buttons = document.getElementById('hero-box2-btn');
let hImg2 = document.getElementById('h-img2');
let hImg3 = document.getElementById('h-img3');
let counter = 0;
btnNext.addEventListener('click' , ()=>{
   counter++;
   if(counter === 1){
         hImg2.style.transform ="translateX(-0vw)";
         hImg2.style.width ="24.31vw";
         hImg2.style.height = "100%";
         hImg2.style.border = "none";
         hImg3.style.transform = "translateX(14.03vw)";
         hImg3.style.width = "17.71vw";
         hImg3.style.height ="23.40vw";
         btnPrev.style.display = 'block';
         buttons.style.transform = 'translateX(-4vw)';
   }else if(counter === 2){
         hImg3.style.transform = "translateX(-0vw)";
         hImg3.style.width = "24.31vw";
         hImg3.style.height ="100%";
         buttons.style.transform = 'translateX(-10vw)';
   }
   if(counter > 2) counter = 2;
})

btnPrev.addEventListener('click' , ()=>{
    counter--;
    if(counter === 1){
        hImg3.style.transform = 'translateX(14.03vw)';
        hImg3.style.width = '17.71vw'
        hImg3.style.height ="23.40vw";
        buttons.style.transform = 'translateX(-4vw)';
    }else if( counter === 0){
        hImg3.style.transform = 'translateX(31.8vw)'
        hImg3.style.width = '4.17vw'
        hImg3.style.height ="13.90vw";
        hImg2.style.transform = "translateX(14.03vw)";
        hImg2.style.width = "17.71vw";
        hImg2.style.height ="23.40vw";
        hImg2.style.border = "3px solid white"
        btnPrev.style.display = 'none';
        buttons.style.transform = 'translateX(0vw)';
    }
    if(counter < 0) counter = 0 ;
})
