$(document).ready(function () {
  //Eventos
  $(window).on('load', viewSplash);
  $('#input-phone').on('input', validatePhone);
  $('#signup button').on('click', showCode);


  // Formulario de verificación de código
  $('#resend-code').on('click', resendCode);
  $('#verify-number #code').on('input', verifyPhone);
  $('#verify-number button').on('click', form);

  // Formulario Sign Up
  $('#sign-up #name').on('input', validateData);
  $('#sign-up #last-name').on('input', validateData);
  $('#sign-up #email').on('input', validateEmail);
  $('#sign-up button').on('click', validateForm);
});

function viewSplash() {
  setTimeout(function () {
    $('.loader-wrap-js').fadeOut(500);
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
  if ($('#verify-number #code').val().length == 3) {
    location.href = 'form.html'
  }
}

function validateData(data) {
  isFullField($(this)) ? $(this).addClass('correct-data') : $(this).removeClass('correct-data');
}

function isFullField(name) {
  return name.val() !== '' ? true : false;
}

function isEmail(email) {
  var PATERNEMAIL = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  return PATERNEMAIL.test(email.val()) ? true : false;
}

function validateEmail() {
  isEmail($(this)) ? $(this).addClass('correct-data') : $(this).removeClass('correct-data');
}


function validateForm(e) {
  e.preventDefault();

  if (isFullField($('#sign-up #name')) && isFullField($('#sign-up #last-name')) && isEmail($('#sign-up #email')) && $('#cbox1').prop('checked')) {
    location.href = 'done.html';
  } else {
    alert('Debe llenar todos los campos');
  }

  //location.href = 'done.html';
}

var x = $('#sign-up button')