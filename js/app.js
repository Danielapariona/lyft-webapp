$(document).ready(function () {
  //Eventos
  $(window).on('load', viewSplash);
  $('#input-phone').on('input', validatePhone);
  $('#signup button').on('click', showCode);
  $('#resend-code').on('click', resendCode);
  $('#code').on('input', verifyPhone);
  $('#verify-number button').on('click', form);
});

function viewSplash() {
  setTimeout(function () {
    $('.loader-wrap').fadeOut(500);
  }, 1000);
}

function validatePhone() {
  if ($(this).val().trim().length === 10) {
    $('#input-phone').removeClass('input-disable').addClass('input-active');
    $('button#next').removeClass('btn-disabled').addClass('btn-active').removeAttr('disabled');
  } else {
    $('#input-phone').removeClass('input-active').addClass('input-disable');
    $('button#next').removeClass('btn-active').addClass('btn-disabled');
  }
}

function numRandom() {
  var $min = 100;
  var $max = 999;
  var num = Math.round(Math.random() * ($max - $min) + $min);
  return num;
}

function showCode(e) {
  e.preventDefault();
  if ($('#signup button').hasClass('btn-active')) {
    alert('Tú código: LAB-' + numRandom());
    //location.reload(true);
    location.href = 'phoneNumber.html'
  }
}

function resendCode() {
  alert('Tú código: LAB-' + numRandom());
}

function verifyPhone() {
  if ($(this).val().trim().length == 3) {
    $('#verify-number button').removeClass('btn-disabled').addClass('btn-active').removeAttr('disabled');
  } else {
    $('#verify-number button').removeClass('btn-active').addClass('btn-disabled').attr('disabled');
  }
}

function form(e) {
  e.preventDefault();
  location.href = 'form.html'
}