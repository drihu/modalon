/*!
 * Modalon v1.0.0 | https://github.com/drihup/modalon
 * Licencia MIT
 */
$(document).ready(function () {

    $('body').append('<div class=\"modal-bg\"><\/div>');

    var modal = {
        time: 150,
        open: function () {
            document.body.style.overflow = 'hidden';
            $('.modal-bg').fadeIn(this.time);
            $('.modal').slideDown(this.time);
        },
        close: function () {
            document.body.style.overflow = 'auto';
            $('.modal-bg').fadeOut(this.time);
            $('.modal').slideUp(this.time);
        }
    };

    $('.modal-open').on('click', modal.open);

    $('.modal-close').on('click', modal.close);

    $('.modal-bg').on('click', modal.close);

});
