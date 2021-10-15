
// Drop za aktivnosti 
$(document).ready(function(){
  
    $(".fun").click(function(){
        $(this).next(".aktivnosti").stop().slideToggle( "slow" );
    });
  });

//Dugme za vrh stranice

  mybutton = document.getElementById("vrhStr");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  $('html, body').animate({scrollTop:0},'50');
}


