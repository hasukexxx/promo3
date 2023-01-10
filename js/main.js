$(document).ready(function () {
  $('.offer__link').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.offers__item').toggleClass('hover');
  });
});

var text = document.getElementById("inputText");

text.onclick = function () {
  text.select();
  document.execCommand("copy");
}