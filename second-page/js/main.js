const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
//my changes//
document.getElementById("dark").addEventListener('click', function(){
    document.body.style.background = 'black';
})
document.getElementById("white").addEventListener('click', function(){
    document.body.style.background = 'white';
})
$(".bangladesh-btn").click(function(){
    $(".bangladesh-blog").slideToggle("slow");
  });
$(".arab-btn").click(function(){
    $(".arab-blog").slideToggle("slow");
  });
$(".southkorea-btn").click(function(){
    $(".southkorea-blog").slideToggle("slow");
  });
$(".russia-btn").click(function(){
    $(".russia-blog").slideToggle("slow");
  });
$(".usa-btn").click(function(){
    $(".usa-blog").slideToggle("slow");
  });

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});