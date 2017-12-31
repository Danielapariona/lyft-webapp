$(document).ready(function () {
  //Eventos
  $(window).on('load', viewSplash);
  $('#input-text').on('input', validatePhone);
  $('#next').on('click', showCode);
});

function validatePhone() {
  if ($(this).val().trim().length === 10) {
    $('#next').removeClass('btn-disabled').addClass('btn-active');
  } else {
    $('#next').removeClass('btn-active').addClass('btn-disabled')
  }
}

function viewSplash() {
  setTimeout(function () {
    $('.loader-wrap').fadeOut(500);
  }, 1000);
}

function numRandom() {
  var $min = 100;
  var $max = 999;
  var num = Math.round(Math.random() * ($max - $min) + $min);
  return num;
}

function showCode() {
  if ($('#next').hasClass('btn-active')) {
    alert('Tú código: LAB-' + numRandom());
    //location.reload(true);
    location.href = 'phoneNumber.html'
  }
}

