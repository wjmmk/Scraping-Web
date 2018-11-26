$(".scrape").click(function (e) {
    $(".frame").attr("src", $(".input").val());
});

$(document).ready(function() {
    $('#limpiar').click(function() {
        $('.form-control').val('');
    });
});

