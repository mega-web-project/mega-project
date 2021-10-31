$(document).ready(function(){
    const nextIcon = '<img src="../logo/right.png" alt="right" class="control-icons">';
    const previous = '<img src="../logo/left.png" alt="left" class="control-icons">';
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
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
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});

