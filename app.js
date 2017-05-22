$(function() {

	//attaches floating nav to all containers except for the introduction container

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

  //updates work sample scrolling depending on the screen size

	updateScroll();

});

//attaches fixed and absolute properties to work div samples depending on the screen size

$(window).resize(function() {
	updateScroll();
});

var hasBoundScroll = false;

var onScroll = function() {

	yaarnDistance = $('#yaarn-container').offset().top,
	localizeDistance = $('#localize-container').offset().top;

	if ( $(window).scrollTop() >= localizeDistance ) {
   	$("#work-label-container").addClass("fixed").removeClass("absolute");
  } else {
    $("#work-label-container").removeClass("fixed");
  }

  if ($(window).scrollTop() >= yaarnDistance) {
    $("#work-label-container").addClass("absolute").removeClass("fixed");
  }

}

function updateScroll() {

	var workDistance = $('#work-label-container').offset().top,
	yaarnDistance = $('#yaarn-container').offset().top,
	localizeDistance = $('#localize-container').offset().top,
	$window = $(window);
  var $width = $(window).width();

  if ($width >= 768 && !hasBoundScroll) {
		$window.on('scroll', onScroll);
		hasBoundScroll = true;
  } else if (hasBoundScroll && $width < 768) {
  		$window.off('scroll', onScroll);
  		$("#work-label-container").removeClass("absolute fixed");
  		hasBoundScroll = false;
  }
}

//changes menu section from shorten nav lines to full page nav menu

function toggleNavMenu() {
  $('.menu-section').toggleClass('on');
  $('.menu-section__toggle').toggleClass('on');
  $('.toggle1').toggleClass('on').toggleClass('hide');
  $('.toggle2').toggleClass('on').toggleClass('hide');
  $('.toggle3').toggleClass('on').toggleClass('hide');
  $('.navigation-list').toggleClass('hide');
  $('.cancel-nav').toggleClass('hide');
}

function openProjectDetails(container) {
  $(container).removeClass('hidden');
  window.location.hash = container;
}

function closeProjectDetails(container) {
  $(container).addClass('hidden');
}
