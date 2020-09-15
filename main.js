$(function () {
  $('#flip').on('click', function () {
    console.log('push');
    $('#card').toggleClass('flipped')
  });
});