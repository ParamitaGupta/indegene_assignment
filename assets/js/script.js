 // click and close of hamburger functionality
$('.hamburger').on('click', function () {

    $('.menu').toggleClass('open');

});

$('.menu a').on("click", function () {
    $('.menu').hide();
});