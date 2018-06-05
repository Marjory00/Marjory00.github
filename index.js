
//Section topnav//
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 
//section data background//
$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object  
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
 
// Put final background position
      var coords = '50% '+ yPos + 'px';

// Move the background
        $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});
$(document).ready(function($) {

	$('.card__share > a').on('click', function(e){ 
		e.preventDefault() // prevent default action - hash doesn't appear in url
   		$(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
		$(this).toggleClass('share-expanded');
    });
  
});

//End Section Background//
//Section About//
//End Section About//
//Section Skills//

//animation//
var $window = $(window);
var $elem = $(".animation")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animation")
    }
});
//END animation//

//Create a Controllable Grid View Using JavaScript//

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}

//END Create a Controllable Grid View Using JavaScript//