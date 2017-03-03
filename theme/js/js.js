(function ($) {
    btn();


    $(document).ready(function(){
        $('.slick-slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight: true,
            arrows: false,
            centerPadding: '40%',
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false
    });
});

function btn () {
    $(document).ready(function(){
//Обработка нажатия на кнопку "Вверх"
        $("#page-down").on('click', function(){
//Необходимо прокрутить в начало страницы
            var curPos=$(document).scrollTop();
            var scrollTime=curPos/1.73;
            $("body,html").animate({"scrollTop":3500},scrollTime);
        });

//Обработка нажатия на кнопку "Вниз"
        $("#page-up").on('click',function(){
//Необходимо прокрутить в конец страницы
            var curPos=$(document).scrollTop();
            var height=$("body").height();
            var scrollTime=(height-curPos)/1.73;
            $("body,html").animate({"scrollTop":0},scrollTime);
        });
    });
}

})(jQuery);

