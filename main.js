const body = document.body;
const slides = document.querySelectorAll(".slide")
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let activeSlide = 0;

function bodyBG(){
 body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
bodyBG();

function current (){
 slides.forEach(slide=>{
  slide.classList.remove('active');
 })
 slides[activeSlide].classList.add('active');
}
current();

right.addEventListener('click',()=>{
 activeSlide++;
 if(activeSlide > slides.length -1 ){
  activeSlide = 0;
 }
 bodyBG();
 current();

})

left.addEventListener('click',()=>{
 activeSlide --;
 if(activeSlide < 0){
  activeSlide = slides.length -1;
 }
 bodyBG();
 current();
})