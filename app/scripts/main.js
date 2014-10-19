jQuery(document).ready(function() {
  // Code here  
  $(".actions-button").click(function() {
    $(this).toggleClass("active");
    $(this).next(".admin-actions").toggleClass("active");
  });
});