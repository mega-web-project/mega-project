$(document).ready(function(){
    const nextIcon = '<img src="../logo/next.png" alt="right" class="control-icons">';
    const previous = '<img src="../logo/previous.png" alt="left" class="control-icons">';
    
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

