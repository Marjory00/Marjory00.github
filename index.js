
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
 
// Put together final background position
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
//End Section Skills//
//Section Projects//
//End Section Projects//
//Section Contact//
//End Section Contact//
//Section Footer//
//End Section Footer//