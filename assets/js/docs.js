'use strict';

$(function() {
// For v2 [data-toggle="dropdown"] is required for [data-submenu].
// For v2 .dropdown-submenu > [data-toggle="dropdown"] is forbidden.
    $('[data-submenu]').submenupicker();
});

$(function () {
    $(function () {
        // Remove Search if user Resets Form or hits Escape!
        $('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
            console.log(event.currentTarget);
            if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
                $(event.currentTarget).attr('type') == 'reset') {
                closeSearch();
            }
        });

        function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
            $form.find('input').val('');
            $form.removeClass('active');
        }

        // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
        $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
            event.preventDefault();
            var $form = $(this).closest('form'),
                $input = $form.find('input');
            $form.addClass('active');
            $input.focus();

        });
        // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
        // if your form is ajax remember to call `closeSearch()` to close the search container
        $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
            event.preventDefault();
            var $form = $(this).closest('form'),
                $input = $form.find('input');
            $('#showSearchTerm').text($input.val());
            closeSearch()
        });
    });
})

// Initialize Tooltip
$(function () {
    $('[data-rel="tooltip"]').tooltip()
})

// Modal tabs
$(function () {
    $('.modal-toggle').click(function (e) {
        var tab = e.target.hash;
        $('li > a[href="' + tab + '"]').tab("show");
    });
})

// Sticky Nav

    $(function() {
        $('.navbar-custom').affix({
            offset: {
                top: $('.navbar-custom').offset().top
            }
        });
    });

// Initialize Popover
$(function () {
    $('[data-toggle="popover"]').popover()
})


// Full Width Video

$(function() {
    $('.jquery-background-video').bgVideo({fadeIn: 2000});
});

// Progress Bar Animation
$(window).ready(function(e){
    $.each($('div.progress-bar'),function(){
        $(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
    });
});

// Textarea Auto resize

$(function() {
    autosize(document.querySelectorAll('textarea'));
});

// toggle comments

function toggleDiv(divId) {
    $("#"+divId).toggle();
}

// toggle plans

$(function() {
    $(".expand-content > a.more-feat").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.clearfix').removeClass("planf-heightaut").addClass("planf-height");
            $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
        }else{
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(this).siblings('.clearfix').removeClass("planf-height").addClass("planf-heightaut");
            $(this).addClass("active");
        }

    });
});

// append modal to body

$(function() {
    var checkeventcount = 1,prevTarget;
    $('.modal').on('show.bs.modal', function (e) {
        if(typeof prevTarget == 'undefined' || (checkeventcount==1 && e.target!=prevTarget))
        {
            prevTarget = e.target;
            checkeventcount++;
            e.preventDefault();
            $(e.target).appendTo('body').modal('show');
        }
        else if(e.target==prevTarget && checkeventcount==2)
        {
            checkeventcount--;
        }
    });
});