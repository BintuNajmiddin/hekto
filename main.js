// slider
let slider = {
  "tags": [
    "swiper"
  ],
  "name": "Swiper - Effect coverflow",
  "dependencies": {
    "swiper": "latest",
    "parcel-bundler": "^1.6.1"
  }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


// collection

const section = document.getElementsByClassName('collection')[0];
const pinkSpan = document.getElementsByClassName('squares')[0];

pinkSpan.addEventListener('click',function (event){
    if(event.target.className == 'pink-square first'){
        section.style.backgroundColor = 'black';
        section.style.color ='white';
    }else
    if(event.target.className == 'pink-square second'){
        section.style.backgroundColor = 'blueviolet';
        section.style.color = 'white';
    }else
    if(event.target.className == 'pink-square third'){
        section.style.backgroundColor = '#f2f0ff';
        section.style.color = 'black';
    }
});

