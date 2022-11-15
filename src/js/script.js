$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.png"></button>',
    });

    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
        $(this)
          .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });

    toggleItem(".catalogue-item__back");
    toggleItem(".catalogue-item__link");

    function toggleItem(item) {
        $(item).each(function(i) {
            $(this).on("click", function(e) {
                e.preventDefault();
                $(".catalogue-item__general").eq(i).toggleClass("catalogue-item__general_active");
                $(".catalogue-item__detail").eq(i).toggleClass("catalogue-item__detail_active");
            })
        })
    }

    $("[data-modal='consultation']").on("click", function() {
       $(".overlay, #consultation").fadeIn("fast"); 
    });

    $(".modal__close").on("click", function() {
        $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
    });

    $(".button_mini").on("click", function() {
        $(".overlay, #order").fadeIn("slow");
    });

    $(".button_mini").each(function(i) {
        $(this).on("click", function() {
            $("#order .modal__descr").text($(".catalogue-item__subtitle").eq(i).text());
        });
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html,  body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});