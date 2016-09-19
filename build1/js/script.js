'use strict';
$(function() {
  $('.checkbox').change(function(){
    if( $('.checkbox').prop('checked') ){
    	$('.category__description').addClass('category__description-show')
    } else{
    	$('.category__description').removeClass('category__description-show')
    }
  })

  $('.plan__info').on('mouseenter', function(){
		$('.plan__hint').addClass('plan-show');
  });
  $('.plan__info').on('mouseleave', function(){
		$('.plan__hint').removeClass('plan-show')
  });

  $("#slider-range").ionRangeSlider({
    type: "single",
    min: 1,
    max: 31,
    step: 1,
    from:15,
    hide_min_max: true
  });

  $('.irs-slider').html(15 + " дней");
    $('#slider-range').change(function(){
    var value = $('.irs-single').html();
    var arr = value.split('');
    var lastNumber = arr[arr.length-1];
    if(lastNumber == 1) {
      $('.irs-slider').html(value + " день")
    } else if (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
      $('.irs-slider').html(value + " дня")
    } else if (lastNumber == 5 || lastNumber == 6 || lastNumber == 7 || lastNumber == 8 || lastNumber == 9) {
      $('.irs-slider').html(value + " дней")
    }
  });
});

'use strict';
