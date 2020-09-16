
$("#all").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});

 $('.carousel').carousel({
	interval: 3500,
	pause: 'hover',
    ride: 'carousel',
	wrap: true
});


// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {       
        $('.scroll-up').fadeIn(200);    
    } else {
        $('.scroll-up').fadeOut(200);   
    }
});

$('.scroll-up').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
