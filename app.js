$(function() {

	$('#localize-more').click(function() {
	  $('#localize-details-container').removeClass('hidden'); 
	  window.location.hash = '#localize-details-container';
	});

	$('#close-localize').click(function() {
  	$('#localize-details-container').addClass('hidden'); 
	});

	$('#edster-more').click(function() {
		console.log('this', this)
	  $('#edster-details-container').removeClass('hidden'); 
	  window.location.hash = '#edster-details-container';
	});

	$('#close-edster').click(function() {
	  $('#edster-details-container').addClass('hidden'); 
	});

	$('#kapitol-more').click(function() {
		console.log('this', this)
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
		console.log('clicked');
		$('.menu-section').toggleClass('on');
		$('.menu-section__toggle').toggleClass('on'); 
		$('.toggle1').toggleClass('on'); 
		$('.toggle2').toggleClass('on');
		$('.toggle3').toggleClass('on');
	})

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
});
