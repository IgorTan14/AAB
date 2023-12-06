$(function(){
    $('.help__wrapper').slick({
        dots: false,
        arrows: true,
        infinite: false,
        nextArrow: '<button type="button" class="slick-arr slick-arr--right"><img src="images/icons/arr-right.png"></button>',
        prevArrow: '<button type="button" class="slick-arr slick-arr--left"><img src="images/icons/arr-left.png"></button>',
    })

    $('.btn').on('click', function(){ 
        $('.main').addClass('off');
        $('.header').addClass('off');
        $('.footer').addClass('off');
        $('.modal').addClass('on');
      });

      $('.modal__close').on('click', function(){ 
        $('.modal').removeClass('on');
        $('.main').removeClass('off');
        $('.header').removeClass('off');
        $('.footer').removeClass('off');
        $('.burger__content').removeClass('on');
      
      });


      

 $('.header__burger').on('click', function(){ 
  $('.burger__content').toggleClass('on');

  $('.product-list__filter ').toggleClass('hidden');
  $('.footer').toggleClass('off');
  $('.main').toggleClass('off');
  $('.header__burger').toggleClass('header__burger--active');
});







});

function checkParams() {
  let name = $('#name').val();
  let phone = $('#phone').val();
  let modal = $('#modal').val();

  
    if(name.length != 0 && phone.length != 0 && modal.length != 0) {
      $('.btn-off').removeClass('btn-off');
    } else {
        $('.btn-off').toggleClass('btn-off');
    }
}

