/*!
 * Modalon v1.0.0 | https://github.com/drihup/modalon
 * Licencia MIT
 */
$(document).ready(function () {

    var modal = {
        time: 400,
        open: function () {
            document.body.style.overflow = 'hidden';
            $('.modal').fadeIn(modal.time);
            $('.modal-content').slideDown(modal.time);
        },
        close: function () {
            document.body.style.overflow = 'auto';
            $('.modal').fadeOut(modal.time);
            $('.modal-content').slideUp(modal.time);
        }
    };

    $('.modal-open').on('click', modal.open);

    $('.modal-close').on('click', modal.close);

    $('.modal').on('click', function (e) {
        if (e.target.className === 'modal') {
            modal.close();
        }
    });

});
