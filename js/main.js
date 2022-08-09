// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS



$(document).ready(function () {




	document.querySelectorAll('.input-date').forEach(inputDate => {
		new AirDatepicker(inputDate, {
	    
		})
	})

	let dpMin, dpMax;

	dpMin = new AirDatepicker('.input-date-min', {
	    onSelect({date}) {
	        dpMax.update({
	            minDate: date
	        })
	    }
	})

	dpMax = new AirDatepicker('.input-date-max', {
	    onSelect({date}) {
	        dpMin.update({
	            maxDate: date
	        })
	    }
	})








	// WIDTH ARROWS




	let widthLi = 0

	setTimeout(function () {

		$('.slick-dots li').each(function () {
			widthLi += $(this).width() + 20

			$('.slider-right .arrows').width(widthLi + 40)
		})

	}, 200)

	// WIDTH ARROWS












	// SLIDER


	if( $('.nav__item').length <= 5 ){
		console.log('sad')
		$('.arrows').hide()
		setTimeout(function () {
			$('.slider-nav .slick-dots li').hide()
		}, 100)
	}




	if( $('body').hasClass('direction-rtl') ){
		$('.slider-for').slick({
			rtl: true,
			slidesToShow: 1,
			asNavFor: '.slider-nav',
			swipe: false,
			// fade: true,
			speed: 200,
			arrows: false,
			responsive:[
				{
					breakpoint: 768,
					settings: {
						swipe: true,
						fade: false,
					}
				}
			]
		})

		$('.slider-nav').slick({
			rtl: true,
			slidesToShow: 5,
			asNavFor: '.slider-for',
			vertical: true,
			dots: true,
			focusOnSelect: true,
			swipe: false,
			speed: 200,
		})

			
		$('.arrows__prev').click(function () {
			$(this).closest('.page-single__lft').find('.slick-next').click()
		})

		$('.arrows__next').click(function () {
			$(this).closest('.page-single__lft').find('.slick-prev').click()
		})


	}else{
		$('.slider-for').slick({
			slidesToShow: 1,
			asNavFor: '.slider-nav',
			swipe: false,
			fade: true,
			speed: 200,
			arrows: false,
			responsive:[
				{
					breakpoint: 768,
					settings: {
						swipe: true,
						fade: false,
					}
				}
			]
		})

		$('.slider-nav').slick({
			slidesToShow: 5,
			asNavFor: '.slider-for',
			vertical: true,
			dots: true,
			focusOnSelect: true,
			swipe: false,
			speed: 200,
		})


		$('.arrows__prev').click(function () {
			$(this).closest('.page-single__lft').find('.slick-prev').click()
		})

		$('.arrows__next').click(function () {
			$(this).closest('.page-single__lft').find('.slick-next').click()
		})

		
		/* $('.page-main__banners--slider').slick({
			slidesToShow: 2,
		}) */
		
	}

	// SLIDER


	let resizeCheck = {}, windowSize;
	
	function resizeCheckFunc(size, minWidth, maxWidth) {
		if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
			resizeCheck[String(size)] = false;
			maxWidth(); // < size
		}
	
		if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
			resizeCheck[String(size)] = true;
			minWidth(); // > size
		}
	}

	
	$('.page-main__banners--slider').slick({
		slidesToShow: 2,
	})

	function resize() {
	
		windowSize = window.innerWidth

		let btnFavorite = $('.btn-add-to-favorite');
		if(btnFavorite[0]) {
			if((windowSize - btnFavorite.offset().left) < 100) {
				btnFavorite.addClass('left-pos');
			} else {
				btnFavorite.removeClass('left-pos');
			}
		}
		


		resizeCheckFunc(768,
		function () {  // screen > 768px
	
			$('.page-main__banners--slider').slick("unslick")
			$('.page-main__banners--slider').slick({
				slidesToShow: 2,
				centerMode: true,
			})
	
		},
		function () {  // screen < 768px
	
			$('.page-main__banners--slider').slick("unslick")
			$('.page-main__banners--slider').slick({
				slidesToShow: 1,
				centerMode: true,
			})
			
		});
	
		resizeCheckFunc(992,
		function () {  // screen > 992px
	
			$('.page-main__banners--slider').slick("unslick")
	
		},
		function () {  // screen < 992px
	
			$('.page-main__banners--slider').slick("unslick")
			$('.page-main__banners--slider').slick({
				slidesToShow: 2,
				centerMode: true,
			})
			
		});

		
	
	}
	
	resize();
	
	window.onresize = resize;














	// QUALIFY

	$('.client-marketing__qualify .qualify__item').click(function () {
		$('.client-marketing__qualify .qualify__item').removeClass('qualify__item_active')
		$(this).addClass('qualify__item_active')

		$('.client-marketing__qualify-blocks .qualify-blocks__block').removeClass('qualify-blocks__block_active')
		$('.client-marketing__qualify-blocks .qualify-blocks__block').eq($(this).index()).addClass('qualify-blocks__block_active')
	})

	// QUALIFY

















	// COUNTER

	$('.counter').each(function () {

		let counterNum = $(this).find('.counter__num').val();

		$(this).find('.counter__minus').click(function () {
			counterNum--
			if( counterNum <= 1 ){
				$(this).closest('.counter').find('input').val(1)
				counterNum = 1
			}
			else
				$(this).closest('.counter').find('input').val(counterNum)
		})
		$(this).find('.counter__plus').click(function () {
			counterNum++;

			$(this).closest('.counter').find('input').val(counterNum)
		})
	})

	// COUNTER


















	// EYE INPUT

	$('.eye').click(function () {
		if( $(this).closest('.input').find('input').attr('type') == 'password' )
			$(this).closest('.input').find('input').attr('type', 'text')
		else
			$(this).closest('.input').find('input').attr('type', 'password')
	})

	// EYE INPUT





















	// DELETE

	$('.aside a').each(function (e) {
		if( $(this).attr('href') == '#' ){
			$(this).css('color', '#ddd')
		}
	})

	// DELETE








	// QUESTION POSITION


	$('.block-with-question').each(function () {
		let halfWidth = $(window).width() / 2
		let positionItem = $(this).offset().left

		if( positionItem > halfWidth ){
			$(this).addClass('block-with-question_left')
		}
	})

	// QUESTION POSITION










	// TABLE OPEN

	$('.table .td_arrow').click(function () {


		if( $(this).closest('.table').hasClass('table_top') ){

			$(this).closest('.table').removeClass('table_top')
			$(this).closest('.table').find('.table').removeClass('table_top')

			$(this).removeClass('td_arrow_active')
			$(this).closest('.tr').find('.td_arrow').removeClass('td_arrow_active')

			$(this).closest('.tr').find('.table').removeClass('table_active')

			$(this).closest('.tr').removeClass('tr_active')
			$(this).closest('.tr').find('.tr').removeClass('tr_active')
		}else{
			$(this).closest('.table').addClass('table_top')
			$(this).addClass('td_arrow_active')
			$(this).closest('.tr').find('.table').eq(0).addClass('table_active')
			$(this).closest('.tr').addClass('tr_active')
		}



		$('.block-with-question').each(function () {
				
			let halfWidth = $(window).width() / 2
			let positionItem = $(this).offset().left

			if( positionItem > halfWidth ){
				$(this).addClass('block-with-question_left')
			}
		})
	})

	// TABLE OPEN











	// COPY TEXT

	$('.label-copy-text .copy-ico').mouseleave(function () {
		setTimeout(function () {
			$('.label-copy-text .copy-ico span').text('Скопировать')
		}, 300)
	})
	$('.label-copy-text').click(function () {
		var copyText = $(this).closest('label').find('input');
		copyText.select();
		document.execCommand("copy");
		
		$(this).find('.copy-ico span').text('Скопировано')
	})

	// COPY TEXT






	// customer-my-products TABS

	$('.customer-my-products__tabs-various .tab').click(function () {
		$('.customer-my-products__tabs-various .tab').removeClass('tab_active')
		$(this).addClass('tab_active')

		$('.customer-my-products__inner .customer-my-products__block').hide()
		$('.customer-my-products__inner .customer-my-products__block').eq($(this).index()).show()
	})

	// customer-my-products TABS










	// VALIDATE FORM

	$('button[type="submit"]').click(function (e) {
		let ee = e
		$(this).closest('form').find('input[required]').each(function () {
			console.log($(this).val())
			if( $(this).val() ){
				$(this).closest('label').removeClass('label-error')
			}else{
				ee.preventDefault()
				$(this).closest('label').addClass('label-error')
				$('html, body').animate({
                    scrollTop: $(".label-error").offset().top
                }, 300);
			}
		})

	})

	// VALIDATE FORM










	// INPUT MAX SYMBOLS

	$('.input-max-symbols textarea').keyup(function () {
		$(this).parent().find('.max-symbols .black').text($(this).val().length)
		if( $(this).val().length > $(this).parent().find('.count-symbols').text() )
			$(this).closest('.input-max-symbols').addClass('label-error')
		else
			$(this).closest('.input-max-symbols').removeClass('label-error')
	})

	// INPUT MAX SYMBOLS












	// LOAD PHOTO

	$('.load-photos input[type="file"]').on('change', function() {
	    var input = $(this)
	    if (!window.FileReader) return false // check for browser support
	    if (input[0].files && input[0].files[0]) {
	        var reader = new FileReader()
	        reader.onload = function (e) {
	            var target = $('#' + input.attr('preview-target-id') + '-1')
	            var background_image = 'url(' + e.target.result + ')'
	            target.css('background-image', background_image)
	            target.parent().show()
	            target.find('img').hide()
	        }
	        reader.readAsDataURL(input[0].files[0]);
	    }
	})

	// LOAD PHOTO











	// SWITCHER LINE

	$('.switcher-line__item').click(function () {
		$('.switcher-line__item').removeClass('switcher-line__item_active')
		$(this).addClass('switcher-line__item_active')

		$('.switcher__block').removeClass('switcher__block_active')
		$('.switcher__block').eq($(this).index()).addClass('switcher__block_active')
	})

	// SWITCHER LINE












	// RELOAD RECIVE

	$('.reload-ico').click(function () {
		$(this).addClass('reload_active')
		setTimeout(function () {
			$('.reload-ico').removeClass('reload_active')
		}, 800)
	})

	// RELOAD RECIVE





	// HEADER CATALOG

	$('.header__catalog').click(function () {
		$('.popup__catalog').addClass('popup__catalog_active')
	})
	$('.popup__catalog .popup__close').click(function (e) {
		$('.popup__catalog').removeClass('popup__catalog_active')
	})

	// HEADER CATALOG





	// SEARCH MOB

	$('.header-search a').click(function (e) {
		e.preventDefault();
		$(this).parent().find('form').slideToggle(300)
	})

	// SEARCH MOB










	// TARIFS TAB

	$('.tarifs__tabs .tab').click(function () {
		let tabIndex = $(this).index();

		$('.tarifs__tabs .tab').removeClass('tab_active')
		$(this).addClass('tab_active')

		$('.tarifs__block .tarifs__item').removeClass('tarifs__item_active')
		$('.tarifs__block .tarifs__item').eq(tabIndex).addClass('tarifs__item_active')
	})

	// TARIFS TAB











	// MENU MOB

	$('.menu-mob').click(function () {
		$('aside').slideDown(300)
	})
	$('.aside__close').click(function () {
		$('aside').slideUp(300)
	})

	// MENU MOB










	// QUESTION ICO

	$('.block-with-question').click(function () {
		$(this).toggleClass('block-with-question_active')
	})
	$('.block-with-question').mouseleave(function () {
		$(this).removeClass('block-with-question_active')
	})

	// QUESTION ICO













	// POPUP

	$('a, button').click(function (e) {
		if( $(this).data('popup') ){
			e.preventDefault()
			$('.popup').removeClass('popup_active')
			$('.popup__'+$(this).data('popup')).addClass('popup_active')
		}
	})

	$('.customer-materials__item').click(function (e) {
		e.preventDefault()

		if( $(this).hasClass('customer-materials__item_video') ){
			$(this).find('.popup-2').addClass('popup_active')
			$(this).removeClass('customer-materials__item_video')
		}
	})

	$('.popup-2 .popup__close, .popup-2 .popup__bgd').click(function (e) {
		e.preventDefault();
		let thisClick = $(this)
		$(this).closest('.popup-2').removeClass('popup_active')

		let src = $(this).closest('.popup-2').find('iframe').attr('src')
		$(this).closest('.popup-2').find('iframe').attr('src', '')
		
		setTimeout(function () {
			thisClick.closest('.customer-materials__item').addClass('customer-materials__item_video')
			thisClick.closest('.popup-2').find('iframe').attr('src', src)
		}, 50)



	})

	$('.popup__close, .popup__bgd').click(function (e) {
		e.preventDefault();
		$(this).closest('.popup').removeClass('popup_active')
	})

	// POPUP














	// IVRIT

	if( $('body').hasClass('direction-rtl') ){

		$('*:not(".top-up-account .reload-ico span"):not(".product__buttons span"):not(".showBlackTextItem span.showBlackTextItem__span"):not(".page-single__lft *"):not(".for__item")').each(function () {
			// let bdr 	= $(this).css('border-right')
			// let bdl 	= $(this).css('border-left')
			// let mr 		= $(this).css('margin-right')
			// let ml 		= $(this).css('margin-left')
			// let pr 		= $(this).css('padding-right')
			// let pl 		= $(this).css('padding-left')
			// let posl 	= $(this).css('left')
			// let posr 	= $(this).css('right')

			// console.log(mr)

			// if( bdr != '0px none rgb(0, 0, 0)' ){
			// 	$(this).css('border-left', bdr)
			// }
			// if( bdl != '0px none rgb(0, 0, 0)' ){
			// 	$(this).css('border-right', bdl)
			// }
			// if( mr != '0' ){
			// 	$(this).css('margin-left', mr)
			// }
			// if( ml != '0' ){
			// 	$(this).css('margin-right', ml)
			// }
			// if( pr != '0' ){
			// 	$(this).css('padding-left', pr)
			// }
			// if( pl != '0' ){
			// 	$(this).css('padding-right', pl)
			// }
			// if( posl != '0' ){
			// 	$(this).css('right', posl)
			// }
			// if( posl != '0' ){
			// 	$(this).css('left', posr)
			// }
			
		})
	}


	// IVRIT
























	// SELECT

	$('.select__head').click(function () {
		$(this).closest('.select').toggleClass('select_active')
		$(this).closest('.select').find('.select__body').slideToggle(300)
	})

	$('.select__item').click(function () {
		$(this).closest('.select').find('input').val($(this).text())
		$(this).closest('.select').find('.select__current').html($(this).html())
		$(this).closest('.select').find('.select__body').slideUp(300)
		$(this).closest('.select').toggleClass('select_active')
	})

	$(document).mouseup(function (e) {
	    var container = $(".select_active");
	    if (container.has(e.target).length === 0){
			$('.select').find('.select__body').slideUp(300)
			$('.select').removeClass('select_active')
	    }
	});

	// SELECT


})





























// Content toggle

$('.about-us__info--content-toggle').on('click', function() {
	let content = $(this).parent().find('.about-us__info--content');

	content.toggleClass('active');
	$(this).toggleClass('active');
	
	if($(this).hasClass('active')) {
		$(this).text($(this).data('active-text'));
	} else {
		$(this).text($(this).data('default-text'));
	}
})

// Content toggle




// tabs

let tabWrapper = $('.page-shops__slider--tab-wrapper'),
	checkTab = true;
$('.page-shops__slider--tabs a').on('click', function(event) {
	event.preventDefault();
	if(checkTab) {
		checkTab = false;

		let activeBlock 	= tabWrapper.find('.page-shops__slider--tab-block.active'),
			block 			= tabWrapper.find($(this).attr('href'));

		activeBlock.removeClass('active');
		$('.page-shops__slider--tabs a').removeClass('active');
		$(this).addClass('active');

		setTimeout(() => {
			block.addClass('active');
			checkTab = true;	
		},200)

	}

})

$('.page-shops__slider--list').slick({
	slidesToShow: 5,
	centerMode: true,
	dots: true,
	responsive:[
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		}
	]
})

// tabs

var slider = document.querySelectorAll('.range-slider');

slider.forEach(slider => {

	let input = slider.querySelector('.range-slider-input'),
		text = slider.parentElement.querySelector('.aside-filter__range--text'),
		currency = input.dataset.currency;

	$('button[type="reset"]').on('click', function() {
		
		slider.noUiSlider.set(Number(input.getAttribute('max'))/2);

	})
	
	noUiSlider.create(slider, {
        
        start: [Number(input.getAttribute('data-start'))],
        connect: 'lower',

        step: Number(input.getAttribute('step')),
        range: {
            'min': Number(input.getAttribute('min')),
            'max': Number(input.getAttribute('max')),
        },
        
        format: {
            to: function (value) {
                
				input.value = value;
				text.value = currency + Number(value).toFixed(0);
				return value;
                
            },
            from: function (value) {
                return value;
            }
        }
    
    });

	

})

$('.aside-filter-open').on('click', function() {
	$('.aside-filter').addClass('active');
	$('body').addClass('popup-active');
})

$('.aside-filter__header--close').on('click', function() {
	$('.aside-filter').removeClass('active');
	$('body').removeClass('popup-active');
})

$('.open-popup').on('click', function(event) {
	event.preventDefault();

	popup($(this).attr('href'));
})

$('.aside-filter__range--text').on('input', function() {
	//console.log($(this).val('123'))
	let value = $(this).val();
	$(this).val($(this).data('currency') + value.replace(/[^+\d]/g, ''));
	/* $(this).val($(this).data('currency') + $(this).val().slice(1)); */

})

$('.btn-change-on-hover').hover(
	function() {
		$(this).text($(this).data('hover-text'))
	},
	function() {
		$(this).text($(this).data('default-text'))
	})

$('.btn-add-to-favorite').on('click', function() {
	$(this).toggleClass('active');
})
