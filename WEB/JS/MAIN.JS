// ARROW
function ARROW() {
  document.getElementById("arrow").style.backgroundColor = "black";
}
function ARROW_BACK() {
  document.getElementById("arrow").style.backgroundColor = "white";
}
// BUTTONS
function option1(){
    document.getElementById("remove_1").style.display="inline"
    document.getElementById("remove_2").style.display="none"
    document.getElementById("remove_3").style.display="none"
}
function option2(){
    document.getElementById("remove_1").style.display="none"
    document.getElementById("remove_2").style.display="block"
    document.getElementById("remove_3").style.display="none"
}
function option3(){
    document.getElementById("remove_1").style.display="none"
    document.getElementById("remove_2").style.display="none"
    document.getElementById("remove_3").style.display="block"
}
// new nav
$(document).ready(function () {
  $('#nav-items').hide();
  $('#product-items').hide();
  $('#feature-items').hide();
  $('#marvel-items').hide();
  $('#ben10-items').hide();
  $('#disney-items').hide();
  $('#pixar-items').hide();
  $('#more').click(function () {
      $('#nav-items').slideToggle();
  })
  $('#products').click(function () {
      $('#product-items').slideToggle();
  })
  $('#features').click(function () {
      $('#feature-items').slideToggle();
  })
  $('#brand_marvel').click(function () {
      $('#marvel-items').slideToggle();
  })
  $('#brand_ben10').click(function () {
      $('#ben10-items').slideToggle();
  })
  $('#brand_disney').click(function () {
      $('#disney-items').slideToggle();
  })
  $('#brand_pixar').click(function () {
      $('#pixar-items').slideToggle();
  })
})