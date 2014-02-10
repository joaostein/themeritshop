//= require jquery
//= require swfobject
//= require jquery_ujs
//= require turbolinks
//= require analytics

$(function (){
  var awardPage = $('.award-page');
  var videoBox = awardPage.find('.video-wrapper');
  var videoCalltoAction = awardPage.find('.video-content-wrapper');
  var playBtn = awardPage.find('.play-button');
  var video = videojs('award-video');

  var toggleCover = function (e) {
    videoCalltoAction.fadeToggle();
    $('.cover').fadeToggle();
    e.preventDefault();
  };

  video.ready(function(){
    $(playBtn).on('click', function (e) {
      toggleCover(e);
      video.play();
    });

    this.on('ended', toggleCover);
  });

});
