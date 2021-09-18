let div = document.querySelectorAll('div');
let btn = document.querySelectorAll('button');

btn[1].onclick = function(){
  if(div[0].classList.contains('layout')){
      div[0].classList.toggle('dark');
      btn.classList = "fas fa-moon";
  }
}





// '''''' OWL JS
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
  $(window).scroll(function(){
    x = $(window).scrollTop();
    console.log(x);
    if( x > 480){
      $('.go').css ('opacity' , "1");
      $('.navbar').css ('background' , "whitesmoke")
    }else{
      $('.go').css ('opacity' , "0");
      $('.navbar').css ('background' , "transparent")
    }
  })


});


// '''''' WOW JS
new WOW().init();


  