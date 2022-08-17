$(function () {

    Background();
 
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data.json'
    });
    var animation2 = bodymovin.loadAnimation({
        container: document.getElementById('bm2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data_2.json'
    });

    var animation3 = bodymovin.loadAnimation({
        container: document.getElementById('bm3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data_3.json'
    });

    //-----------Background---------------------
    function Background(){
        $('.background img').each(function(index, value){
            var RandomLeft = Math.random() * 100;
            var RandomTop = Math.random() * 100;
            var RandomRotate = Math.random() * 360;
            $(this).css('left', + RandomLeft + '%');
            $(this).css('top', + RandomTop + '%');  
            $(this).css('transform', 'rotateZ( ' + RandomRotate +  'deg )');   
        });
    }
    Background();

    //----------header-menu---------------------
        //----Leng--Box--------------------------------------
        $('.leng__box_list').hover(function () {
            $('.leng__box_item').css('display', 'block');
        },
        function () {
            $('.leng__box_item').css('display', 'none');
        }
        );
    $('.leng__box_item').click(function () {
        $('.leng__box_item').removeClass('active');
        var Leng = $(this).text();
        $('.leng__box_list_title').text(Leng);
        $(this).addClass('active');
        
    });
    //------------Scroll-------------------------
    //---Head visibility at the scroll
    var scrollPos = 0;
    $(window).scroll(function () {

        Background();

        var st = $(this).scrollTop();
        if (st > scrollPos) {
            $('.menu').addClass('_menu__out');
        } else {
            $('.menu').removeClass('_menu__out');
        }
        scrollPos = st;
    });

    //---------The appearance of the block--POST-----
    function PostButton(a, b){
        var $element = $('.contact');
        let counter = a;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            //Если скролл до начала елемента
            //var offset = $element.offset().top
            //Если скролл до конца елемента
            var offset = $element.offset().top + $element.height() + 35;

            if (scroll > offset && counter == 0) {
                $('.post-button').addClass('active');
                counter = b;
            } else if (scroll < offset && counter == 1) {
                $('.post-button').removeClass('active');
                counter = 0;
            }
        });
        
     // --------scrolling the other way-----------------
        var $element2 = $('#about');
        let counter2 = 0;
        $(window).scroll(function () {
            var scroll2 = $(window).scrollTop();

            var offset2 = $element2.offset().top + $element2.height() - 200;

            if (scroll2 > offset2 && counter2 == 0) {
                $('.post-button').removeClass('active');
                counter2 = 1;
            } else if (scroll2 < offset2 && counter2 == 1) {
                $('.post-button').addClass('active');
                counter2 = 0;
            }
        });
    }
    PostButton(0,1);    
    

    //----Animation-----------------
    $('.kater').hover(function () {
        $('.kater__box').toggleClass("active");
    });

    $('.man').hover(function () {
        $('.man__box').toggleClass("active");
    });

    var icons = function () {
        $.each($('.shapeshifter'), function (i, el) {
            setTimeout(function () {
                $(el).addClass("play");
            }, 1000 + (i * 1000));
        });
    };

    setTimeout(function () {
        icons();
    }, 8000);

    var iconsTitle = function () {
        $.each($('.shapeshifter'), function (i, el) {
            setTimeout(function () {
                $(el).addClass('title');
            }, 1000 + (i * 1000));
        });
    };
    setTimeout(function () {
        iconsTitle();
    }, 8000);

    //---------Galerie------------------

    //Filter for gallery
    $('.button').click(function () {
        Background();
        $('.galerie-item.show').addClass('transition');

        var value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.filter').show('3000');
        } else {
            $('.filter').not("." + value).hide('3000');
            $('.filter').filter("." + value).show('3000');
        }
        //Add active    
        $(this).addClass('active').siblings().removeClass('active');
    });

    function Galerie() {
        $('.shapeshifter').on('click', function() {                
            Background();
            $('.post-button').css('display','none');
            $('.menu').css('background','transparent');
            $('.gallery__content').removeClass('content_show');
            if ($('.galerie-item.show').hasClass('show') && !$(this).hasClass('active')) {
                $('.galerie-item.show').removeClass('show');
                $(this).trigger('click');
            } else {
                $('.galerie-item.show').removeClass('transition');
                
            }

            $('#home, #competence, #service, #about, #contact').css('display', 'none');
            $('section.gallery').css('padding-bottom', '30px');

            $('.shapeshifter').attr('disabled', false);
            $(this).attr('disabled', true);
            $('.gallery__content').css('display', 'none');
            var MenuName = $(this).attr('name');
            $('.gallery__content').each(function () {
                var ContentName = $(this).attr('name');
                if (MenuName == ContentName) {
                    $(this).css('display', 'block');
                    $(this).addClass('content_show');
                    $(this).find('.galerie__nav .button.active').trigger('click');

                    var images = function () {
                        $.each($('.gallery__content.content_show').find('.galerie')
                        .find('.galerie-list').children(), function (i, el) {
                            setTimeout(function () {
                                $(el).addClass("show");
                            }, 200 + (i * 200));
                        });
                    };
                    images();
                }
            });

            $('.shapeshifter').removeClass('active');
            $(this).addClass('active');
            $('.cansel').css('display', 'block');
        });

    }
    Galerie();

    $('.cansel').click(function () {
        Background();
        $('.menu').css('background','#fff');
        $('#home, #competence, #service, #about, #contact').css('display', 'block');
        $('section.gallery').css('padding-bottom', '150px');
        $('.shapeshifter').removeClass('active');
        $(this).css('display', 'none');
        $('.gallery__content').css('display', 'none');
        $('.post-button').css('display','block');
        $('.post-button').removeClass('active');
        $('.galerie-item.show').removeClass('transition');
        $('.galerie-item').removeClass('show');

        PostButton(1,1);  //----отмена появления кнопки при первой прокрутке

    });
    function halloShow(){
        $('.hallo__title').addClass('_show');
    }
    setTimeout(function () {
        halloShow();
    }, 4000);


    //-----------Single------------------


    $('.galerie-item').click(function (e) {
        Background();
        $('.galerie__single__content').removeClass('neu');
        var GalleryContentName = $(this).parent().parent().parent().attr('name');
        e.preventDefault();
        var AttrList = $(this).attr('name');
        $('body').addClass('lock');
        $('.galerie__single').css('display', 'block');
        $('.images').removeClass('active');
        $('.images').each(function (index, value) {
            var Length = $('.images').length;
            var AttrBlock = $(this).attr('name');
            if (AttrList == AttrBlock) {
                $(this).addClass('active');
                $('.galerie__single_title').text(GalleryContentName);
                $('.galerie__single_indikator').text(index + 1 + ' / ' + Length);
                $(this).attr('id', 'carentImg');
                $('.galerie__single__next, .galerie__single__prew').css('pointer-events', 'all');

                var carentImg = $('#carentImg');
                var Numb = carentImg.attr('number');
                if (Numb == 1) {
                    $('.galerie__single__prew').css('pointer-events', 'none');
                }
                if (Numb == Length) {
                    $('.galerie__single__next').css('pointer-events', 'none');
                }
            }
        });
        
        
        //----------Neu Class for '.galerie__single__content'---------------
        var ParentName = $(this).parent().parent().parent().attr('name');
        if(ParentName == 'Malerei'){
            $('.galerie__single__content').addClass('neu');

            if (window.matchMedia('(max-width: 600px)').matches)
            {
                $('.galerie__single__content.neu').css('min-width','calc(100vw - 30px)');
            }else{
                var ImgHeight = $('.images.active img').height();
                var WindHeight = $(window).height();
                var WindWidth = $(window).width();
                var Сoefficient = WindHeight / ImgHeight;
                var ImgWidth = $('.images.active img').width();
                var NeuImgWidth = ImgWidth * Сoefficient;
                var ImgWidthPers = ( NeuImgWidth / WindWidth) * 80;
                $('.galerie__single__content.neu').css('width', + ImgWidthPers + '%');
            }
        }else{
            $('.galerie__single__content.neu').removeClass('neu');
        }

    });

    $('.galerie__single .cansel').click(function () {
        $('.galerie__single__content').removeClass('neu');
        $('.galerie__single').css('display', 'none');
        $('#gallery .cansel').css('display', 'none');
        $('body').removeClass('lock');
        $('.images').removeAttr('id');
    });
    $('.images').each(function (kay, value) {
        kay += 1;
        $(this).attr('number', kay);
    });


    $('.galerie__single__next').click(function (e) {
        $('.galerie__single__content').removeClass('neu');

        $('.galerie__single__prew').css('pointer-events', 'all');
        var Length = $('.images').length;
        var carentImg = $('#carentImg');
        var title = carentImg.next().attr('title');
        var Numb = carentImg.next().attr('number');
        $('.images').removeAttr('id');
        $('.images').removeClass('active');
        carentImg.next().attr('id', 'carentImg');
        carentImg.next().addClass('active');

        $('.galerie__single_title').text(title);
        if($('.galerie__single_title').text() == 'malerei'){
            $('.galerie__single__content').addClass('neu');

            if (window.matchMedia('(max-width: 600px)').matches)
            {
                $('.galerie__single__content.neu').css('min-width','calc(100vw - 30px)');
            }else{
                var ImgHeight = $('.images.active img').height();
                var WindHeight = $(window).height();
                var WindWidth = $(window).width();
                var Сoefficient = WindHeight / ImgHeight;
                var ImgWidth = $('.images.active img').width();
                var NeuImgWidth = ImgWidth * Сoefficient;
                var ImgWidthPers = ( NeuImgWidth / WindWidth) * 80;
                $('.galerie__single__content.neu').css('width', + ImgWidthPers + '%');
            }

        }else{
            $('.galerie__single__content').removeClass('neu'); 
        }

        $('.galerie__single_indikator').text(Numb + ' / ' + Length);
        if (Numb == Length) {
            $(this).css('pointer-events', 'none');

        }
    });

    $('.galerie__single__prew').click(function (e) {
        $('.galerie__single__content').removeClass('neu');

        $('.galerie__single__next').css('pointer-events', 'all');
        var Length = $('.images').length;
        var carentImg = $('#carentImg');
        var title = carentImg.prev().attr('title');
        var Numb = carentImg.prev().attr('number');
        $('.images').removeAttr('id');
        $('.images').removeClass('active');
        carentImg.prev().attr('id', 'carentImg');
        carentImg.prev().addClass('active');

        $('.galerie__single_title').text(title);
        if($('.galerie__single_title').text() == 'malerei'){
            $('.galerie__single__content').addClass('neu');
            if (window.matchMedia('(max-width: 600px)').matches)
            {
                $('.galerie__single__content.neu').css('min-width','calc(100vw - 30px)');
            }else{
                var ImgHeight = $('.images.active img').height();
                var WindHeight = $(window).height();
                var WindWidth = $(window).width();
                var Сoefficient = WindHeight / ImgHeight;
                var ImgWidth = $('.images.active img').width();
                var NeuImgWidth = ImgWidth * Сoefficient;
                var ImgWidthPers = ( NeuImgWidth / WindWidth) * 80;
                $('.galerie__single__content.neu').css('width', + ImgWidthPers + '%');
            }

        }else{
            $('.galerie__single__content').removeClass('neu'); 
        }


        $('.galerie__single_indikator').text(Numb + ' / ' + Length);
        if (Numb == 1) {
            $(this).css('pointer-events', 'none');
        }
    });


    //$(document).click(function (e) {
    //    if ($(e.target).closest(".shapeshifter").length) {
    //        // клик внутри элемента
    //        return;
    //    }
    //    // клик снаружи элемента
    //    $('.shapeshifter').removeClass('active');
    //});

    //class change when clicking on #burger button
    $('.burger-link').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.burger-link__span').toggleClass('active');
        $('.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
        Background();
    });


    //-------------NAV menu---------------------

    $('.nav-link').click(function () {
        Background();
        $('.nav-link').removeClass('nav-link_active');
        $(this).addClass('nav-link_active');
        $('.nav__menu').toggleClass('active');
        $('.burger-link').toggleClass('active');
        $('.burger-link__span').removeClass('active');
        $('body').toggleClass('lock');
        $('.cansel').trigger('click');
        if ($(window).width() < 600) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100 + 'px'
            }, {
                duration: 500,
                easing: 'swing'
            });
        } else {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 230 + 'px'
            }, {
                duration: 500,
                easing: 'swing'
            });
        }

    });


    $('.menu_logo').click(function () {
        Background();
        $('.cansel').trigger('click');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 500,
            easing: 'swing'
        });
    });
    $('#ersteButton').click(function () {
        Background();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 230 + 'px'
        }, {
            duration: 500,
            easing: 'swing'
        });
    });

    $('.post-button').click(function () {
        Background();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 230 + 'px'
        }, {
            duration: 500,
            easing: 'swing'
        });
    });

    //--------------------Auge-----------------------------------------------

    var mouseX = 0,
        mouseY = 0,
        limitX = 14 - 2,
        limitY = 10 - 10; // Determines the boundaries on which the object will move
    if ($(window).width() < 600) {
        limitX = 15 - 5;
    }
    $(window).mousemove(function (e) {
        var offset = $('.augen__container').offset();
        mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseY = Math.min(e.pageY - offset.top, limitY); // Looking for coordinates of the cursor
        if (mouseX < 0) mouseX = 0; // From what point (coordinate) start moving the cursor
        if (mouseY < 0) mouseY = 0; // If the cursor is outside the web page at the time of boot, it will set the object in the coordinates x = 0, y = 0.
    });

    var follower = $(".augen");
    var xp = 30,
        yp = 0; // The initial coordinates of the object at the time of page download
    var loop = setInterval(function () {
        // Next is determined by the speed with which the object will move.
        // Change the value 50 to change the speed.The more this value, the slower the object is moving.
        xp += (mouseX - xp) / 15;
        yp += (mouseY - yp) / 15;
        follower.css({
            left: xp,
            top: yp
        }); // Changing the positioning of the object using CSS

    }, 10); //In this case, this value determines how smoothly and quickly moves


    //------------------Spoiler---------------------------
      //-----Spoiler---------------------------

    $('.block_titel').click(function(event){          
        if ($('.block').hasClass('one')) {
            if($(this).next().hasClass('active')){
                $(this).next().removeClass('active');
            }else{
                $('.arrow').removeClass('active');
                $(this).next().addClass('active');
            }
            
            $('.block_text').not($(this).next().next()).slideUp(300);
        }
        $(this).toggleClass('active').next().next().slideToggle(300);
    });
    var Numder = 0;
    $('.block_titel.kunden').click(function(){ 
        if(Numder == 0){
            NumberCount();
        } 
        Numder = 1;     
    });

    //----------------Couter-------------------

    function NumberCount() {  
        $('.numbers').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    //---------------------CONTACT------------------------------------------------------

    $('.box-input').click(function (e) {
        Background();
        //function for text input animation
        var nameVal = $("input[id*='name']").val();
        var emailVal = $("input[id*='email']").val();
        if (nameVal == 0 && emailVal == 0) {
            $(this).addClass('active');
            $('.answer').css('display', 'none');
            $('.contact-back__text').css('display', 'none');
        } else {
            $(this).addClass('active');
        }
    });

    // -- Contact-form -- button -- send
    $('.button__block').click(function (e) {
        Background();
        //The function monitors the filling of all fields
        e.preventDefault();
        var nameVal1 = $("input[id*='name1']").val();
        var emailVal1 = $("input[id*='email1']").val();
        var textareaVal1 = $("textarea[id*='textarea1']").val();
        if (nameVal1 != 0 && emailVal1 != 0 && textareaVal1 != 0) {
            $('.box-input').removeClass('active');
            $('.answer').css('display', 'none');
            $('input[type=text]').val("");
            $("input[id*='email']").val("");
            $('textarea').val("");
            $('.contact-back__text').css('display', 'block');
        } else {
            $('.answer').css('display', 'block');
        }
    });

    // by click aut Contact-form 
    function contactAut() {
        $('.box-input').removeClass('active');
        $('input[type=text]').val("");
        $("input[id*='email']").val("");
        $('textarea').val("");
        $('.box-input').removeClass('active');
        $('.answer').css('display', 'none');
        $('.contact-back__text').css('display', 'none');
    }
    $(document).click(function (e) {
        if ($(e.target).closest('.contact-block').length) {
            // click inside an item 
            return;
        }
        contactAut();
    });

    $('.menu__phone.mail').click(function (e) {
        e.preventDefault();
        window.location.href = "mailto:demikhovskiy@gmail.com";
    });

    //---------Contact---Form-------end

});



//-----Preloader---------------------------------------------------------------------

$(window).on('load', function () {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    //--------CHART-------------------

    $('.chart').addClass('active');
    $('.chart').easyPieChart({
        size: 100,
        barColor: '#FA6F6F',
        scaleColor: false,
        lineWidth: 5,
        trackColor: '#fff',
        lineCap: 'circle',
        animate: 4000,
    });

    //--------CHART---END----------------

    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1);
    $('body').addClass('lock');
    $('#preloader').addClass('active');
    $('.cursor').css('display', 'none');

    function displayNone() {
        $('#preloader').fadeOut();
        $('body').removeClass('lock');
        $('.cursor').css('display', 'block');
    }
    setTimeout(displayNone, 4000);
});
//-----Preloader END----------------------------------------------------