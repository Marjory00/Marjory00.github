
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
            
// Put together our final background position
            var coords = '50% '+ yPos + 'px';

// Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
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