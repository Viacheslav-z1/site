$(function(){
    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

    $('.galery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});


    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class=" arrow__left slick-prev"><img src="images/arrow-left.svg" alt=""></img></button>',
        nextArrow: '<button type="button" class=" arrow__right slick-prev"><img src="images/arrow-right.svg" alt=""></img></button>'
      });


	  $("a.header__arrow-link, a.header__btn-link").on("click", function(e){
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - 60
		}, 1500);
	});

	$('.menu__btn').on('click',function(){
      $('.menu__list').toggleClass('menu__list--active')
	})
});