/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-header').on('click', '.navbar-toggle', function () {
  window.setTimeout(function () {
    if ($('.navbar-toggle').hasClass('collapsed')) {
          $('.navbar-header').removeClass('navbar-open');
    } else {
          $('.navbar-header').addClass('navbar-open');
    }
  }, 1);
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
  $(this).find('.portfolio-content').html(
    $('#content-' + this.id).html()
  );
});

// $('div.modal').on('show.bs.modal', function() {
// 	var modal = this;
// 	var hash = modal.id;
// 	window.location.hash = hash;
// 	window.onhashchange = function() {
// 		if (!location.hash){
// 			$(modal).modal('hide');
// 		}
// 	}
// });

// $('div.modal').on('hide.bs.modal', function() {
//   window.onhashchange = null;
//   window.location.hash = '';
// });
