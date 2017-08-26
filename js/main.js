// Copy to clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// Show tooltip after copied to clipboard
$('.mail-tooltip-icon').click(function(){
  $( "#copy-mail-tooltip" )
    .css({ "display": "inline-block" })
    .delay(500)
    .fadeOut('fast');
});

$('.tel-tooltip-icon').click(function(){
  $( "#copy-tel-tooltip" )
    .css({ "display": "inline-block" })
    .delay(500)
    .fadeOut('fast');
});

// PhotoSwipe for image viewer in portfolio
$(function() {
  $('.caption + .images').photoSwipe('a', {
    getDoubleTapZoom: function(isMouseClick, item) {
      if(isMouseClick) {
        return 0.38;
      } else {
        return item.initialZoomLevel < 0.7 ? 1 : 1.5;
      }
    }
  });
});
