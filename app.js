
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
			console.log('something happened');
	  $('#edster-details-container').addClass('hidden'); 
	});

	$('#kapitol-more').click(function() {
		console.log('this', this)
	  $('#kapitol-details-container').removeClass('hidden'); 
	  window.location.hash = '#kapitol-details-container';
	});

	$('#close-kapitol').click(function() {
			console.log('something happened');
	  $('#kapitol-details-container').addClass('hidden'); 
	});

	$('#yaarn-more').click(function() {
		console.log('this', this)
	  $('#yaarn-details-container').removeClass('hidden'); 
	  window.location.hash = '#yaarn-details-container';
	});

	$('#close-yaarn').click(function() {
		console.log('something happened');
  $('#yaarn-details-container').addClass('hidden'); 
});

});
