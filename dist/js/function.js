$(window).on("load resize", function() {
  var imageheight = $('.bg').height();
  var imagewidth = $('.bg').width();

  $('#content').css({
    'width': imagewidth,
    'height': imageheight
  });

}).resize();