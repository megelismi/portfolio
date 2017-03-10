
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

  $(window).scroll(function() {  
    var topHeight = $('#introduction-container').height(); 
      var scroll = $(window).scrollTop();  

      if (scroll >= topHeight) {
          $(".menu").addClass("show");
      }
      if (scroll < topHeight) {
          $(".menu").removeClass("show");
      }
  });
});
