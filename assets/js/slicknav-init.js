$('#coursemenu-slick').slicknav({
    label: 'Menu',
    duration: 500,
    prependTo:'#coursemenu',
    init: function( autoopen ){}
});

$(function( autoopen ) {
    jQuery('#coursemenu-slick').slicknav('open');
});