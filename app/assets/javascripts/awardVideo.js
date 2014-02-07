$(function () {
  var awardPage = $('.award-page');
  var videoBox = awardPage.find('.video-wrapper');
  var videoCalltoAction = awardPage.find('.video-content-wrapper');
  var playBtn = awardPage.find('.play-button');

  $(playBtn).on('click', function (e) {
    console.log('ae');
    videoBox.fadeToggle();
    videoCalltoAction.fadeToggle();
    e.preventDefault();
  });
});