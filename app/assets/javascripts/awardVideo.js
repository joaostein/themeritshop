//= require jquery
//= require swfobject
//= require jquery_ujs
//= require turbolinks
//= require analytics

var params = {
  allowScriptAccess: 'always'
};

var atts = {
  id: 'myPlayer'
};

// swfobject.embedSWF(swfUrl, htmlElementId, width, height, swfVersion, xiSwfUrlStr, flashvarsObj, paramsObj, attrObj)
swfobject.embedSWF('http://www.youtube.com/v/7QBgK0_RbkE?enablejsapi=1&playerapiid=myPlayer&version=3', 'youtubeApiPlayer', '425', '356', '8', null, null, params, atts);

// To test the functions, we need to have a local server running (https://developers.google.com/youtube/js_api_reference#GettingStarted)
var onYouTubePlayerReady = function (playerId) {
  myPlayer = new YoutubePlayer(); // Create a new YouTubePlayer object
  myPlayer.loaded = true; // Set loaded to true after successfully loading the video
  myPlayer.bindPlayEvent();
};

var YoutubePlayer = function () {
  this.loaded = false;
  this.player = document.getElementById('myPlayer'); // Get player element DOM using it's ID that is generated on the 'playerapiid' parameter on swfUrl
};

YoutubePlayer.prototype.play = function () {
  if (this.player && this.loaded) {
    this.player.playVideo(); // Get the player DOM element and invoke the API .playVideo() (https://developers.google.com/youtube/js_api_reference#playVideo)
  }
};

YoutubePlayer.prototype.bindPlayEvent = function () {
  var self = this; // Save this object to use inside the click callback function
  var awardPage = $('.award-page');
  var videoBox = awardPage.find('.video-wrapper');
  var videoCalltoAction = awardPage.find('.video-content-wrapper');
  var playBtn = awardPage.find('.play-button');

  $(playBtn).on('click', function (e) {
    videoCalltoAction.fadeToggle();
    $('.cover').fadeToggle();
    self.play();
    e.preventDefault();
  });
};
