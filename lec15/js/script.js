/*

$(selector).event(function() {
    action
})
1. selector : a
2. event : click
3. action : show full text

*/

// $('a').click
$('a').on('click', function() {

    let text = $('a').text();

    // console.log(text);

    if (text == 'Read More..') {
        $('.full-text').show()
        $('a').text('Read Less..')
    }else {
        $('.full-text').hide()
        $('a').text('Read More..')
    }

})

$('.menu-toggler').on('click', function() {
    // $('.side-menu').fadeToggle()
    $('.side-menu').toggleClass('active');
    // $('.menu-toggler i').toggleClass('fa-times');
})