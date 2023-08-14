$(document).ready(function() {
    $(".openbtn").click(function() {
      $(".overlay").fadeIn();
      $(".modal-box").fadeIn();
    });
  
    $(".overlay, .modal-box").click(function() {
      $(".overlay").fadeOut();
      $(".modal-box").fadeOut();
    });
  });