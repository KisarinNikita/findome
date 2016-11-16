  $(document)
    .ready(function() {
      $('.ui.selection.dropdown').dropdown();
      $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
      });
    });


$(function() {
    $('.scrollp').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function() {
	$("notification-open").click(function(){
		$('.notification-body').show();
	});

	  $(".close-notification").click(function(){
		$('.notification-body').hide();
	});
}); 


$(document).ready(function(){ 
    $(".floatingmes").show();  
	$("#block").mousemove(
	
	function (pos) {  
	$(".floatingmes").show(); 
    $(".floatingmes").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY-350)+'px'); 	
    }   
   
   ).mouseleave(function() {
    $(".floatingmes").hide();  
   }); 
}); 

$(document).ready(function(){ 
    $(".tooltip-area").show();  
	$("#block-area").mousemove(
	
	function (pos) {  
	$(".tooltip-area").show(); 
    $(".tooltip-area").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY-80)+'px'); 	
    }   
   
   ).mouseleave(function() {
    $(".tooltip-area").hide();  
   }); 
}); 



$(document).ready(function(){ 
    $(".tooltip-rating").hide();  
	$(".zuzamen").mousemove(
	
	function (pos) {  
	$(".tooltip-rating").show(); 
    $(".tooltip-rating").css('left',(pos.pageX+30)+'px').css('top',(pos.pageY-400)+'px'); 	
    }   
   
   ).mouseleave(function() {
    $(".tooltip-rating").hide();  
   }); 
}); 


    $(document).ready(function(){
	  $(".feedback-open").click(function(){
			$(".feedback-menu").show();
			$(this).hide();
       });
			
       $("#fb1").click(function(){
			$(".phone-order").show();
			$(".guide-order").hide();
			$(".question-order").hide();  
			$(".review-order").hide();    
			$(".close_feed_menu").hide();
			$(".fb_i").css("background","#4c4c4c");
			$(this).css("background","#3e90b1");
       });
		
       $("#fb2").click(function(){
			$(".phone-order").hide();
			$(".guide-order").show(); 
			$(".question-order").hide();  
			$(".review-order").hide();     
			$(".close_feed_menu").hide();
			$(".fb_i").css("background","#4c4c4c");
			$(this).css("background","#3e90b1");
       });

       $("#fb3").click(function(){
			$(".phone-order").hide();
			$(".guide-order").hide(); 
			$(".question-order").show();  
			$(".review-order").hide();     
			$(".close_feed_menu").hide();
			$(".fb_i").css("background","#4c4c4c");
			$(this).css("background","#3e90b1");
       });

       $(".fb4").click(function(){
			$(".phone-order").hide();
			$(".guide-order").hide(); 
			$(".question-order").hide();  
			$(".review-order").show();     
			$(".close_feed_menu").hide();
			$(".fb_i").css("background","#4c4c4c");
			$(this).css("background","#3e90b1");
       });
		
		$(".fb1").click(function(){
			$(".phone-order").show();    
			$(".feedback-menu").show();
			$(".feedback-open").hide();
			$(".fb_i").css("background","#4c4c4c");
			$("#fb1").css("background","#3e90b1");
			$(".review-order").hide();
			$(".guide-order").hide(); 
			$(".question-order").hide();  
       });
		

       $(".fb5").click(function(){
			$(".review-order").show();    
			$(".feedback-menu").show();
			$(".feedback-open").hide();
			$(".fb_i").css("background","#4c4c4c");
			$(".fb4").css("background","#3e90b1");
			$(".phone-order").hide();
			$(".guide-order").hide(); 
			$(".question-order").hide();  
       });
		
		$(".fb6").click(function(){
			$(".review-order-issue").show();   
	   });
		
		$(".close_feed").click(function(){
			$(".fb-window").hide();
			$(".close_feed_menu").show();
       });

		$(".close_feed_menu").click(function(){
			$(".feedback-menu").hide();
			$(".feedback-open").show();
       });
    });



$(function(){

	$('#rating_dev').rating({
		fx: 'full',
        image: 'images/stars.png',
        loader: 'images/ajax-loader.gif',
		url: 'rating.php',
        callback: function(responce){
            this.vote_success.fadeOut(2000);
            alert('Общий бал: '+this._data.val);
        }
	});
})

$(document).ready(function(){ 
	var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*1258/100;
        el.innerHTML = '<svg width="500" height="500"><circle transform="rotate(-90)" r="200" cx="-240" cy="210" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 1258px;" r="200" cx="-240" cy="210" /></svg>';
    });
};
Circle('.cir');
	
}); 



$(document).ready(function() {
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};
});

$(document).ready(function(){
   $(".compression-button").click(function(){
	  $(".compression-button").css("background","#4c4c4c");
	  $(".comprassion-bg-two").css("display","inline");
	  $(".comprassion-bg").css("display","inline");
	  $("#csi1.comprassion-slider-item").css("opacity","1");
	  $(this).css("background","#00b7e4");
	  $(this).css("border","2px solid #00b7e4");
   });
});


$(window).scroll(function() {
	if ($(this).scrollTop() > 400) {
	   $('.pull').css({
			'display': 'none'
		});
	}
});

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});
});

$(function () {
	$('[rel="tooltip"]').tooltip({
		
					trigger:"click"
	})
	
		$('[rel="popover"]').popover({
			trigger:"click"
		})
});

$('.m_programs').click(function(){
    $('img').toggle().toggleClass('bank-triangle');
});

$(document).ready(function(){		
var hellopreloader = document.getElementById("hellopreloader_preload");
		function fadeOutnojquery(el){
			el.style.opacity = 1;
			var interhellopreloader = setInterval(function(){
				el.style.opacity = el.style.opacity - 0.05;
				if (el.style.opacity <=0){
					clearInterval(interhellopreloader);
					hellopreloader.style.display = "none";}
				},16);
			}
		window.onload = function(){
			setTimeout(function(){
				fadeOutnojquery(hellopreloader);
			},350);
		};
		});

$(document).ready(function(){
	
		$(".iab").css("background","rgba(0, 183, 228, 0.5)");		
		$(".search-input").hover(function(){
			$(".iab").css("background","#3f91b2");
			$(".iab h1").css("opacity","1");
			$(".iab p").css("color","#fff");
		});
		$(".search-input").mouseout(function(){
			$(".iab").css("background","rgba(0, 183, 228, 0.5)");
			$(".iab h1").css("opacity","1");
			$(".iab p").css("color","#eee");
		});
	});
	


//paralax
	$(document).ready(function(){

		$('div[data-type="background"]').each(function(){
			var $bgobj = $(this); // создаем объект
			$(window).scroll(function() {
				var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 

				// Присваиваем значение background-position
				var coords = 'center '+ yPos + 'px';
				// Создаем эффект Parallax Scrolling
				$bgobj.css({ backgroundPosition: coords });
			
			});
		});
	});


// script to dynamically change the height is proportional to the width of the screen
     $(function(){
        $('.m_height').height($('.m_width').width()/1.5);
        $(window).resize(function(){
            $('.m_height').height($('.m_width').width()/1.5);
        });
    });    

     $(function(){
        $('.big-height').height($('.plusplus').width()/5.7);
        $(window).resize(function(){
            $('.big-height').height($('.plusplus').width()/5.7);
        });
    });    

    $(function(){
        $('.big-height').height($('.fiftyminus').width()/0.71);
        $(window).resize(function(){
            $('.big-height').height($('.fiftyminus').width()/0.71);
        });
    });      
              
    $(function(){
        $('.big-height').height($('.fiftyplus').width()/2.13);
        $(window).resize(function(){
            $('.big-height').height($('.fiftyplus').width()/2.13);
        });
    });
            
    $(function(){
        $('.height').height($('.fiftyplus').width()/4.27);
        $(window).resize(function(){
            $('.height').height($('.fiftyplus').width()/4.27);
        });
    }); 

    $(function(){
        $('.height').height($('.fifty').width()/2.85);
        $(window).resize(function(){
            $('.height').height($('.fifty').width()/2.85);
        });
    });   

    $(function(){
        $('.double-big-height').height($('.plusplus').width()/1.89);
        $(window).resize(function(){
            $('.double-big-height').height($('.plusplus').width()/1.89);
        });
    }); 

    $(function(){
        $('.triple-big-height').height($('.plusplus').width()/1.41);
        $(window).resize(function(){
            $('.triple-big-height').height($('.plusplus').width()/1.41);
        });
    }); 


            

        function ArrowMeter(){
            var height = $('.height').height();
            var result = height;
            $('.fotorama__arr--prev').css('top', result);
            $('.fotorama__arr--next').css('top', result);
            $('.prev').css('top', result);
            $('.next').css('top', result);
        };

    $(function(){
        ArrowMeter();
        $(window).resize(function(){
            ArrowMeter();
        });
    }); 


    $(document).ready(function() {
        $(".a-dom").click(function(){
            $('#block1').hide();
            $('#block2').show();
        });

        $(".a-section").click(function(){
            $('#block2').hide();
            $('#block3').show();
        });

        $(".block1").click(function(){
            $('#block3').hide();
            $('#block2').hide();
            $('#block1').show();
        });

        $(".block2").click(function(){
            $('#block1').hide();
            $('#block3').hide();
            $('#block2').show();
        });
    }); 



 // jQuery for page scrolling feature - requires jQuery Easing plugin
 $(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//  scroll up
 $(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

 
//  sticky menu
    $(window).load(function(){
      $("#header").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'my-wrapper' });
    });


	//apartment buttons
    $(document).ready(function(){
       $("#comparisonh").hover(function(){
           $(this).css("opacity","1");
          $("#comparison").css("opacity","1");
       });
    });
    $(document).ready(function(){
       $("#comparisonh").mouseout(function(){
         $(this).css("opacity","0");
          $("#comparison").css("opacity","0.5");
       });
    });
        
    $(document).ready(function(){
       $("#bankh").hover(function(){
           $(this).css("opacity","1");
          $("#bank").css("opacity","1");
       });
    });
    $(document).ready(function(){
       $("#bankh").mouseout(function(){
         $(this).css("opacity","0");
          $("#bank").css("opacity","0.5");
       });
    });
        
    $(document).ready(function(){
       $("#documentsh").hover(function(){
           $(this).css("opacity","1");
          $("#documents").css("opacity","1");
       });
    });
    $(document).ready(function(){
       $("#documentsh").mouseout(function(){
         $(this).css("opacity","0");
          $("#documents").css("opacity","0.5");
       });
    });





// map
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 12
        }),

		
		 myPlacemark4 = new ymaps.Placemark([55.77, 37.65], {
            // Свойства.
            hintContent: ''
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: '/images/mark.svg',
            // Размеры метки.
            iconImageSize: [45, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });
	
		myPlacemark1 = new ymaps.Placemark([55.8, 37.6], {
            // Свойства.
            hintContent: ''
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: '/images/mark.svg',
            // Размеры метки.
            iconImageSize: [45, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });
	

        myPlacemark2 = new ymaps.Placemark([55.76, 37.56], {
            // Свойства.
            hintContent: ''
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: '/images/mark.svg',
            // Размеры метки.
            iconImageSize: [45, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark4)
        .add(myPlacemark2)
        .add(myPlacemark1);
}

    // ffloorslider
    $(function () {
        $("#floorslider").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 25,
            from: 5,
            to: 17,
            type: 'double',
            step: 1,
            grid: true,
			 max_postfix: "+"
        });
    });

    // meters slider
    $(function () {
        $("#meters").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 15,
            max: 110,
            from: 20,
            to: 80,
			min_interval: 10,
            type: 'double',
            step: 1,
            grid: true,
			 max_postfix: "+"
        });
    });


    // meter-price slider
    $(function () {
        $("#meter-price").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 30,
            max: 125,
            from: 40,
            to: 100,
			min_interval: 10,
            type: 'double',
            step: 1,
            grid: true,
			max_postfix: "+"
        });
    });


    // flat-price slider
    $(function () {
        $("#flat-price").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0.5,
            max: 4.5,
            from: 1,
            to: 5,
			min_interval: 0.5,
            type: 'double',
            step: 0.1,
            grid: true,
			 max_postfix: "+"
        });
    });

    $(document).ready(function() {
        $(".top-fng").click(function(){
           $(this).css("fill","#00b7e4");
			$(".bottom-fng").css("fill","#d3d3d3");
        });
    }); 

    $(document).ready(function() {
        $(".bottom-fng").click(function(){
           $(this).css("fill","#00b7e4");
			$(".top-fng").css("fill","#d3d3d3");
        });
    });  

    //plan-zk 
    $(document).ready(function() {
        $(".a-dom").click(function(){
            $('#block1').hide();
            $('#block2').show();
        });

        $(".a-section").click(function(){
            $('#block2').hide();
            $('#block3').show();
        });

        $(".block1").click(function(){
            $('#block3').hide();
            $('#block2').hide();
            $('#block1').show();
        });

        $(".block2").click(function(){
            $('#block1').hide();
            $('#block3').hide();
            $('#block2').show();
        });
    }); 

    //modal-hidden 
    $(document).ready(function() {
        $(".m1").click(function(){
			$('.mb').hide();
            $('.mb1').show();
        });

        $(".m2").click(function(){
            $('.mb').hide();
            $('.mb2').show();
        });

        $(".m3").click(function(){
            $('.mb').hide();
            $('.mb3').show();
        });

        $(".m4").click(function(){
			$('.mb').hide();
            $('.mb4').show();
        });

        $(".m5").click(function(){
			$('.mb').hide();
            $('.mb5').show();
        });
    });  

    // чек бокс для фильтров
    $(document).ready(function(){
        // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
        $('.mfilter_checkbox').each(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            if(checkbox.prop("checked")) $(this).addClass("mfilter_checkbox_active");
        });

        // при клике по диву, делаем проверку
        $('.mfilter_checkbox').click(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            // если чекбокс был активен
            if(checkbox.prop("checked")){
                // снимаем класс с родительского дива
                $(this).removeClass("mfilter_checkbox_active");

                // и снимаем галочку с чекбокса
                checkbox.prop("checked", false);
            // если чекбокс не был активен
            }else{
                // добавляем класс родительскому диву
                $(this).addClass("mfilter_checkbox_active");
                // ставим галочку в чекбоксе
                checkbox.prop("checked", true);
            }
        });
    });

    // чек бокс для модалки
    $(document).ready(function(){
        // проверяем, какие чекбоксы активны и меняем сласс для родительского дива

        $('.modal_checkbox').each(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            if(checkbox.prop("checked")) $(this).addClass("check_active_modal");
        });

        // при клике по диву, делаем проверку
        $('.modal_checkbox').click(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            // если чекбокс был активен
            if(checkbox.prop("checked")){
                // снимаем класс с родительского дива
                $(this).removeClass("check_active_modal");

                // и снимаем галочку с чекбокса
                checkbox.prop("checked", false);
            // если чекбокс не был активен
            }else{
                // добавляем класс родительскому диву
                $(this).addClass("check_active_modal");
                // ставим галочку в чекбоксе
                checkbox.prop("checked", true);
            }
        });
    });


    // чек бокс для бронирования
    $(document).ready(function(){
        // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
        $('.check-book').each(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            if(checkbox.prop("checked")) $(this).addClass("check-book-active");
        });

        // при клике по диву, делаем проверку
        $('.check-book').click(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            // если чекбокс был активен
            if(checkbox.prop("checked")){
                // снимаем класс с родительского дива
                $(this).removeClass("check-book-active");
                // и снимаем галочку с чекбокса
                checkbox.prop("checked", false);
            // если чекбокс не был активен
            }else{
                // добавляем класс родительскому диву
                $(this).addClass("check-book-active");
                // ставим галочку в чекбоксе
                checkbox.prop("checked", true);
            }
        });
    });

    // чек бокс для бронирования на выдаче
    $(document).ready(function(){
        // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
        $('.result_checkbox').each(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            if(checkbox.prop("checked")) $(this).addClass("check_active_result");
        });

        // при клике по диву, делаем проверку
        $('.result_checkbox').click(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            // если чекбокс был активен
            if(checkbox.prop("checked")){
                // снимаем класс с родительского дива
                $(this).removeClass("check_active_result");
                // и снимаем галочку с чекбокса
                checkbox.prop("checked", false);
            // если чекбокс не был активен
            }else{
                // добавляем класс родительскому диву
                $(this).addClass("check_active_result");
                // ставим галочку в чекбоксе
                checkbox.prop("checked", true);
            }
        });
    });

    // чек бокс для бронирования на паковки
    $(document).ready(function(){
        // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
        $('.parking_checkbox').each(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            if(checkbox.prop("checked")) $(this).addClass("check_active_parking");
        });

        // при клике по диву, делаем проверку
        $('.parking_checkbox').click(function(){
            var checkbox = $(this).find('input[type=checkbox]');
            // если чекбокс был активен
            if(checkbox.prop("checked")){
                // снимаем класс с родительского дива
                $(this).removeClass("check_active_parking");
                // и снимаем галочку с чекбокса
                checkbox.prop("checked", false);
            // если чекбокс не был активен
            }else{
                // добавляем класс родительскому диву
                $(this).addClass("check_active_parking");
                // ставим галочку в чекбоксе
                checkbox.prop("checked", true);
            }
        });
    });


		// действия после полной загрузки страницы
		$(document).ready(function(){
			// проверяем, какие чекбоксы активны и меняем сласс для родительского дива
			$('.dec_checkbox').each(function(){
				var checkbox = $(this).find('input[type=checkbox]');
				if(checkbox.prop("checked")) $(this).addClass("check_active");
			});
		
			// при клике по диву, делаем проверку
			$('.dec_checkbox').click(function(){
				var checkbox = $(this).find('input[type=checkbox]');
				// если чекбокс был активен
				if(checkbox.prop("checked")){
					// снимаем класс с родительского дива
					$(this).removeClass("check_active");
					// и снимаем галочку с чекбокса
					checkbox.prop("checked", false);
				// если чекбокс не был активен
				}else{
					// добавляем класс родительскому диву
					$(this).addClass("check_active");
					// ставим галочку в чекбоксе
					checkbox.prop("checked", true);
				}
			});
		});

  