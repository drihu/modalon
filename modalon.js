/*!
 * Modalon v1.0.0
 * https://github.com/drihup/modalon
 * MIT License
 */
'use strict';
$(function () {

    var modal = {
        time: 300,
        content: $('.modal'),
        wrapper: $('.modal-wrapper'),
        btnOpen: $('.modal-btn-open'),
        btnClose: $('.modal-btn-close'),
        open: function () {
            document.body.style.overflow = 'hidden';
            modal.wrapper.fadeIn(modal.time);
            modal.content.slideDown(modal.time);
        },
        close: function () {
            document.body.style.overflow = 'auto';
            modal.wrapper.fadeOut(modal.time);
            modal.content.slideUp(modal.time);
        }
    };

    modal.btnOpen.on('click', modal.open);

    modal.btnClose.on('click', modal.close);

    modal.wrapper.on('click', function (e) {
        if (e.target.className === modal.wrapper.attr('class')) {
            modal.close();
        }
    });

});
