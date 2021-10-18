$(document).ready(function(){
    const nextIcon = '<img src="../logo/next.png" alt="right">';
    const previous = '<img src="../logo/previous.png" alt="left">';
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:[
            nextIcon,
            previous
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })
});

