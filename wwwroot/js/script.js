$(document).ready(function(){
    //Change btn-black on mouse enter and exit
    $('.btn-black').mouseenter(function(){
        $(this).css("background-color", "silver")
        $(this).css("color", "black")
    })
    $('.btn-black').mouseout(function(){
        $(this).css("background-color", "black")
        $(this).css("color", "white")
    })
    //Change btn-white on mouse enter and exit
    $('.btn-white').mouseenter(function(){
        $(this).css("background-color", "#0f1e40")
        $(this).css("color", "white")
    })
    $('.btn-white').mouseout(function(){
        $(this).css("background-color", "white")
        $(this).css("color", "black")
    })
});