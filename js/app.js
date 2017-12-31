$(document).ready(function() {
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loader-wrap').fadeOut(500);
    }, 1000);
  });

  
  // show a dialog box when clicking on an element
  var $btnNext = $('#next');
  $btnNext.on('click', function(e) {
      e.preventDefault();
      alert('Tú código: LAB-'+ numRandom());
  });
});


function numRandom() {
  var $min = 100;
  var $max = 999;
  var num = Math.round(Math.random() * ($max - $min) + $min);
  return num;
}