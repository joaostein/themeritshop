$('.buy-trigger').on('click', function (e) {
  var url = $(this).data('url');
  $('#modal').find('form').attr('action', url);
  e.preventDefault();
});
