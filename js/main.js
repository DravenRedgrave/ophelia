
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.slider-box').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.record-slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,

    TouchMove:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.slider-news').slick({
    slidesToShow:2,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,

    TouchMove:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('.answer').hide();
  $('.blog-spoiler-content h4').click(function functionName() {
    let $answer = $(this).next('.answer');
    if ($answer.is(':hidden')) {
      $answer.slideDown();
      $(this).addClass('close');
    } else {
      $answer.fadeOut();
      $(this).removeClass('close')
    }
  });
});

const animItems = document.querySelectorAll('._amin-items');
if (animItems.length>0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeigth = animItem.offsetHeigth;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeigth - animItemHeigth / animStart ;
      if (animItemHeigth > window.innerHeigth) {
        animItemPoint = window.innerHeigth - window.innerHeigth / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint )&& pageYOffset <(animItemOffset + animItemHeigth)) {
        animItem.classList.add('.active');
      }else{
        animItem.classList.remove('.active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
}


const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {nav.className = 'active';}
      else {nav.className = '';}
  });



  $(window).on("scroll",function(){
if($(window).scrollTop()){
  $('header').addClass('windows');
}
else {
  $('header').removeClass('windows');
}
})

$(window).on("scroll",function(){
if($(window).scrollTop()){
$('.head').addClass('windows');
}
else {
$('.head').removeClass('windows');
}
})
