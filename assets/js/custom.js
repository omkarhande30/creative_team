$(window).load(function() {
    jQuery('#all').click();
    return false;
});

function send_contact_msg(){
    var email =  $("#contact_email").val();
    var name =  $("#contact_name").val();
    var message =  $("#contact_msg").val();

    var valid = '<p class="text-center">Please provide all required details!<p>'+
                '<br><p class="text-center"><button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button></p>';

    var loading = '<div class="row">' +
                    '<div class="col-md-12" id="contactStatusIcon">' +
                        '<div class="loader" id="loader-3"></div>' +
                    '</div>'+
                    '<div class="col-md-12 contactStatusText" id="contactStatusText">'+
                        '<p class="text-center">'+
                            'Please wait!'+
                        '</p>'+
                    '</div>'+
                '</div>';

    var success = '<p class="text-center">Thank you! I will get back to you soon.<p>';

    if(email=="" || name=="" || message==""){
        $("#contactStatusBody").html(valid);    
        $('#contactStatus').click();
        return;
    }

    $("#contactStatusBody").html(loading);
    $('#contactStatus').click();
    $.post('https://submit-form.com/2CEudH3yeNJQ3h-rP8YKE', {
      email: email,
      name: name,
      message: message
    }).then(function (err) {
        console.log(err);
        $("#contactStatusBody").html(success);
        $("#contact_email").val('');
        $("#contact_name").val('');
        $("#contact_msg").val('');
        setTimeout(() => {
            $("#contactStatusClose").click();
            $("#contactStatusBody").html(loading);
        }, 600 * 4);
    });
  }

$(document).ready(function() {
  
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });
	
    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }
	
    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });

   $(".fancybox").fancybox();
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
document.getElementById('').onclick = function() {
    var section = document.createElement('section');
    section.className = 'wow fadeInDown';
    section.className = 'wow shake';
    section.className = 'wow zoomIn';
    section.className = 'wow lightSpeedIn';
    this.parentNode.insertBefore(section, this);
};