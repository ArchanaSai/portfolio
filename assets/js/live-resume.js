$('[data-toggle="collapsible-nav"]').on('click', function(e){
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

function setDisplaySize(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show'); //Show navigation menu in bigger screens by default.
        $('#ham-button').addClass('ml-0');
        $('#ham-button').removeClass('ml-auto');  
    } else {
        $('#collapsible-nav').removeClass('show');
        $('#ham-button').removeClass('ml-0');
        $('#ham-button').addClass('ml-auto');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
}
$(document).ready(setDisplaySize);

$(window).resize(setDisplaySize);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }, 
    
    function (event) {

        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);