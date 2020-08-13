$(document).ready(function () {

    $('[data-bg]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-bg') + ')').css('height', '450px').css('background-repeat', 'no-repeat').css('background-size', 'cover');
    });


    $.when(

        $.getScript("https://theautohost.com/_cardinal/dist/js/slick.min.js", function () {
            console.log("Chumney & Associates: carousel loaded.");


        }),
        $.getScript("https://theautohost.com/_cardinal/dist/js/aos.js", function () {
            console.log("Chumney & Associates: Interactions  was loaded.");
        }),
        $.getScript("https://www.theautohost.com/_assets/coding/custom/disclaimers/js/readmore.js", function () {
            console.log("Chumney & Associates: Readmore  was loaded.");
        }),
    ).then(function () {
        aosInitialize();
        slickCarouselInitialize();
        contentPageDisclaimers();
    });




    function aosInitialize() {
        AOS.init({
            once: true,
        });

        console.log('Chumney & Associates: Interactions initialized...')

    }

    function slickCarouselInitialize() {
        $('.ca-vehicle-slide').slick({
            dots: false,
            arrows: true,
            vertical: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            verticalSwiping: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
        })

    }


    function contentPageDisclaimers() {
        
        // new modal goes here
        var content = document.getElementById('ca-modal-disclaimer');

        /*var disclaimerModal = new Cardinal({
            content: content,
            overlay: true,
            maxWidth: 800,
        });*/

        new Readmore('.vehicle-about', {
            speed: 75,
            collapsedHeight: 70,
            moreLink: '<a href="#" class="ca-readmore">Read More</a>',
            lessLink: '<a href="#" class="ca-readmore">Read less</a>'
        });

        $('a[href="#ca-modal-disclaimer"').click(function (event) {
            event.preventDefault();
            disclaimerModal.open();
        });



    }




});

