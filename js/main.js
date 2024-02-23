$(document).ready(function () {

  // Init
  $('.home').hide().fadeIn(1000)


  $('#experience1').on('click', () => {
    $('#texto_exp').load('assets/complements/experiencia1.html')
    $('#experience1').parent().addClass('list-item-decored')
    $('#experience2').parent().removeClass('list-item-decored')

  })
  $('#experience2').on('click', () => {
    $('#texto_exp').load('assets/complements/experiencia2.html')
    $('#experience2').parent().addClass('list-item-decored')
    $('#experience1').parent().removeClass('list-item-decored')
    $('#experience1').parent().addClass('list-item')
  })

  let contactOffset = $('#contact').offset();
  // stop serve para a animação não carregar mais que uma vez
  let stop_0 = 0;

  $(window).scroll(function (e) {

    let scroll = $(window).scrollTop();

    if (scroll > (contactOffset.top - 500) && stop_0 == 0) {
      $("#contact").addClass('move');
      $("#info").addClass('move');

      stop = 1;
    }

  });
});

