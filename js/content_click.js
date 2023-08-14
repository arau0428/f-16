$(document).ready(function() {
    $(".click_circle").click(function() {
        $(this).toggleClass('active');
        $(".job").addClass('active');
    });
});