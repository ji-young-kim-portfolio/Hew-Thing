$(function(){
    $('.nav> li').mouseover(function(){
        $('.all_box').stop(1500).slideDown();
    });
    $('.nav> li').mouseout(function(){
        $('.all_box').stop(1500).slideUp(500);
    });
});