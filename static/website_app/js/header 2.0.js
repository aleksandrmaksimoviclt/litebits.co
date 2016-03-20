$(function(){

    var didScroll;
    var navheight = $('nav').outerHeight();
    var delta = 10;
    var lastScrollTop = 0;

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function  hasScrolled(){
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop && st > navheight){
            $('nav').removeClass('down').addClass('up');
        } else {            
            $('nav').removeClass('up').addClass('down');
        }
        lastScrollTop = st;
    }
    
});