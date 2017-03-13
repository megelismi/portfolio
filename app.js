$(function() {

	//.find && .closest
	$('#localize-more').click(function() {
	  $('#localize-details-container').removeClass('hidden');
	  window.location.hash = '#localize-details-container';
	});

	$('#close-localize').click(function() {
  	$('#localize-details-container').addClass('hidden'); 
	});

	$('#edster-more').click(function() {
	  $('#edster-details-container').removeClass('hidden'); 
	  window.location.hash = '#edster-details-container';
	});

	$('#close-edster').click(function() {
	  $('#edster-details-container').addClass('hidden'); 
	});

	$('#kapitol-more').click(function() {
	  $('#kapitol-details-container').removeClass('hidden');
	  window.location.hash = '#kapitol-details-container'; 
	});

	$('#close-kapitol').click(function() {
	  $('#kapitol-details-container').addClass('hidden'); 
	});

	$('#yaarn-more').click(function() {
		console.log('this', this)
	  $('#yaarn-details-container').removeClass('hidden');
	  window.location.hash = '#yaarn-details-container';  
	});

	$('#close-yaarn').click(function() {
  	$('#yaarn-details-container').addClass('hidden'); 
	});

	$('.menu-section__toggle').on('click', function() {
		$('.menu-section').toggleClass('on');
		$('.menu-section__toggle').toggleClass('on'); 
		$('.toggle1').toggleClass('on'); 
		$('.toggle2').toggleClass('on');
		$('.toggle3').toggleClass('on');
		$('.navigation-list').toggleClass('hide'); 
	})

	$('.nav-link').on('click', function() {
		$('.menu-section').toggleClass('on');
		$('.menu-section__toggle').toggleClass('on'); 
		$('.toggle1').toggleClass('on'); 
		$('.toggle2').toggleClass('on');
		$('.toggle3').toggleClass('on');
		$('.navigation-list').toggleClass('hide'); 
	});

  $(window).scroll(function() {  
    var topHeight = $('#introduction-container').height(); 
      var scroll = $(window).scrollTop();  

      if (scroll >= topHeight) {
          $(".menu-section__toggle").removeClass("hide");
      }
      if (scroll < topHeight) {
          $(".menu-section__toggle").addClass("hide");
      }
  });

 	var workDistance = $('#work-label-container').offset().top,
 	contactDistance = $('#contact-label-container').offset().top,
  $window = $(window);

	$window.scroll(function() {
    if ( $window.scrollTop() >= workDistance ) {
    	console.log('fixed');
      $("#work-label-container").addClass("fixed");
    }
    if ($window.scrollTop() >= contactDistance) {
    	console.log('got to contact');
    	$("#work-label-container").removeClass("fixed");
    }
});
});
