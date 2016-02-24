/*!
 * Modalon v1.0.0 | https://github.com/drihup/modalon
 * Licencia MIT
 */
$(document).ready(function () {

    $('body').append('<div class=\"modal-bg\"><\/div>');

    var modal = {
        time: 400,
        open: function () {
            document.body.style.overflow = 'hidden';
            $('.modal-bg').fadeIn(modal.time);
            $('.modal').slideDown(modal.time);
        },
        close: function () {
            document.body.style.overflow = 'auto';
            $('.modal-bg').fadeOut(modal.time);
            $('.modal').slideUp(modal.time);
        }
    };

    $('.modal-open').on('click', modal.open);

    $('.modal-close').on('click', modal.close);

    $('.modal-bg').on('click', modal.close);

});
