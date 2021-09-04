$(window).scroll(function() {
    let top = $(window).scrollTop();
    if(top > 20) {
        $('header').addClass('fixed');
    }else {
        $('header').removeClass('fixed');
    }
})


$('#text').on('keyup', function() {
    let count = $('#text').val().length;
    $('#msg').text(100 - count)

    if(100 - count == 0) {
        $('#text').css('color', '#f00')
        $('#msg').css('color', '#f00')
    }else {
        $('#text').css('color', '#000')
        $('#msg').css('color', '#000')
    }
})

// $('.input-wrapper button').on('click', function() {
//     let type = $('.input-wrapper input').attr('type');

//     if(type == 'password') {
//         $('.input-wrapper input').attr('type', 'text');
//         $('.input-wrapper i').addClass('fa-eye-slash');
//     }else {
//         $('.input-wrapper input').attr('type', 'password');
//         $('.input-wrapper i').removeClass('fa-eye-slash');
//     }
// })


$(".input-wrapper button").mousedown(function(){
    $('.input-wrapper input').attr('type', 'text')
    $('.input-wrapper i').addClass('fa-eye-slash')
}).mouseup(function(){
    $('.input-wrapper input').attr('type', 'password')
    $('.input-wrapper i').removeClass('fa-eye-slash');
}).mouseout(function(){
    $('.input-wrapper input').attr('type', 'password')
    $('.input-wrapper i').removeClass('fa-eye-slash');
});


$('#mode').on('click', function() {
    $('body').toggleClass('dark');
    $('#mode i').toggleClass('fa-sun');
})