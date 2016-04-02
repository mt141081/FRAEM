/* ==============================================
	Page Preloader
=============================================== */
$(window).load(function() { 
	$("#loader").delay(500).fadeOut(); 
	$(".mask").delay(1000).fadeOut("slow");
});




/* Start Ready Function */
jQuery(document).ready(function ($) { 

'use strict';

/* ==============================================
	Video Player
=============================================== */	
$(function(){
    $(".player").mb_YTPlayer();
  });


/* ==============================================
	img Hover
=============================================== */	

$('#one').mouseover(function() {

    // increase the 500 to larger values to lengthen the duration of the fadeout 
       // and/or fadein
    $('#one').fadeOut(500, function() {
        $('#one').attr("src","img/derboy.png");
        $('#one').fadeIn(500);
    });

});

$('#one').mouseout(function() {

    // increase the 500 to larger values to lengthen the duration of the fadeout 
       // and/or fadein
    $('#one').fadeOut(500, function() {
        $('#one').attr("src","img/portrait-sample.gif");
        $('#one').fadeIn(500);
    });

});

	
});
/* end ready function */