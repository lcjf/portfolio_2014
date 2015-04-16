$(document).ready(function(){   
    
    // Resize delay //
	var rtime = new Date(1, 1, 2000, 12,00,00);
	var timeout = false;
	var delta = 200;
	$(window).resize(function() {
		rtime = new Date();
		if (timeout === false) {
			timeout = true;
			setTimeout(resizeend, delta);
		}
	});

	function resizeend() {
		if (new Date() - rtime < delta) {
			setTimeout(resizeend, delta);
            
		} else {
			timeout = false;
		}               
	}
    
    // Remove hash from address bar //
    if(window.location.hash) {
        var hash = location.hash.replace('#', '');
    }
    
    // Initialise slick slider //
    $('.slider-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: true,
            }
        }]
    });
    $('.tipsters-slider-container').slick({
        slidesToShow: 4,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // Style first word of heading
    $.fn.wrapStart = function (numWords) { 
        var node = this.contents().filter(function () { return this.nodeType == 3 }).first(),
            text = node.text(),
            first = text.split(" ", numWords).join(" ");

        if (!node.length)
            return;

        node[0].nodeValue = text.slice(first.length);
        node.before('<span>' + first + '</span>');
    };
    $('.box h1').each(function() {
        $(this).wrapStart(1);
    });
    $('.meet-our-tipsters h1').each(function() {
        $(this).wrapStart(2);
    });
    $('.tipster-wrapper span').each(function() {
        $(this).wrapStart(1);
    });

/*    // Set slider/tab variables //
    var el_active_pane, val;
    var el_tab = $('.tabbed-area-container .tabs-main-slider li a');
    var el_pane = $('.tabbed-area-wrapper > div');

     // Calculate height function - regex to create class name and triggers transition //
    function set_height() {
        val = val.replace(/\s+/g, '-').toLowerCase();
        el_active_pane = $('.tabbed-area-wrapper > div.' + val);
        el_active_pane_parent = $(el_active_pane).parents('.tabbed-area-wrapper');
        el_active_pane_height = $(el_active_pane).height()
        el_active_pane_parent.css('height', el_active_pane_height);
        $(el_pane).removeClass('go-tab');
        el_active_pane.addClass('go-tab');
        //console.log("if");
    }
    
    // Tab switcher //
    $(el_tab).on('click', function() {
        $(el_tab).parent().removeClass('tab-toggle-visibility');
        $(this).parent().addClass('tab-toggle-visibility');
        val = $(this).text();
        set_height();
        return false;
    });
    
    // Get height of first tab and set height in CSS on doc ready //
    val = $(el_tab).first().text();
    
    // Custom CSS3 accordion //
    // Set variables
    var el_li = $('.accordion li');
    
    // Set default state (first panel open)
    el_li.each(function() {
        $(this).attr('data-active', 'no');
        el_li.first().attr('data-active', 'yes');
        el_li.first().next().addClass('go-accordion');
        if ($(this).attr('data-active') == 'yes' ) {
            $(this).append('<div class="expand expanded"></div>');
            $(this).next().show();
        }
        else {
            $(this).append('<div class="expand"></div>');
        }
    });
	
    // Do stuff on click
    $('.accordion li a').on('click', function() {
        el_li.next().removeClass('go-accordion');
        $('.accordion li .expand').removeClass('expanded');
        
        if ( $(this).parents('.accordion li').attr('data-active') == 'no' ) {
            $(this).parents('.accordion li').next().addClass('go-accordion');
            $(this).parents('.accordion li').find('.expand').addClass('expanded');
            el_li.not(this).attr('data-active', 'no');
            $(this).parents('.accordion li a').attr('data-active', 'yes');
       }
        
        else if ( $(this).parents('.accordion li').attr('data-active') == 'yes' ) {	
            $(this).parents('.accordion li a').next().removeClass('go-accordion');
            $(this).parents('.accordion li .expand').removeClass('expanded');
            $(this).parents('.accordion li a').attr('data-active', 'no');
        }
        go_accordion_calc_height();          
        return false;
    });
    function go_accordion_calc_height() {
        $('.go-accordion').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
            set_height();
        });
    }*/
    
    // Mobile Menu //
    
	var menu = $('.menu').clone(); 
	$(menu).appendTo('body').addClass('mobmen');	
	var mobmenu = $('.mobmen');
	
    // Mobile Nav Icon animation //
    var nav_icon = $('#nav-icon');
    
	$('#nav-icon').on('click', function() {
        nav_icon.toggleClass('nav-icon-go');
		mobmenu.toggleClass('mob-menu-go');
        setTimeout(function () {
            $('body').toggleClass('overflow-state');
        }, 125);
		//$('.overlay').show();
	});	
    
/*    // Calculate accordion height when all CSS3 animations are complete
    go_accordion_calc_height();
    set_height();
    return false;*/
	
});

// Initialise Marquee
$(function () {
    $('.marquee').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        duration: 20000,
        pauseOnHover: true
        });
});