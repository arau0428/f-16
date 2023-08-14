$(document).ready(function() {
    $(".click_circle").click(function() {
        $(".job_box").toggleClass('active');
        $(this).toggleClass('active');
    });
});