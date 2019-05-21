$(document).ready(function(){

  new WOW().init();


  var coupleHeight = $('#couple-box img').height();
  $('#story-txt-box').css('height', coupleHeight);

  $(window).resize(function(){
    var coupleHeight = $('#couple-box img').height();
    $('#story-txt-box').css('height', coupleHeight);
  })



  // Hover text

  $('#coffee-combos p').hover(function(){
    $('#coffee-combos p').removeClass('hidden');
  })
  $('#coffee-combos p').mouseout(function(){
    $('#coffee-hidden').addClass('hidden');
  })

  $('#teaBlock p').hover(function(){
    $('#teaBlock p').removeClass('hidden');
  })
  $('#teaBlock p').mouseout(function(){
    $('#tea-hidden').addClass('hidden');
  })

  $('#pancakes p').hover(function(){
    $('#pancakes p').removeClass('hidden');
  })
  $('#pancakes p').mouseout(function(){
    $('#pancakes-hidden').addClass('hidden');
  })

  $('#dessert p').hover(function(){
    $('#dessert p').removeClass('hidden');
  })
  $('#dessert p').mouseout(function(){
    $('#dessert-hidden').addClass('hidden');
  })

});
