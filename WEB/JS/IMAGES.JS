// //for main image magnify
//         /*Size is  set in pixels... supports being written as: '250px' */
//         var magnifierSize = 250;

//         /*How many times magnification of image on page.*/
//         var magnification = 4;

//         function magnifier() {

//             this.magnifyImg = function (ptr, magnification, magnifierSize) {
//                 var $pointer;
//                 if (typeof ptr == "string") {
//                     $pointer = $(ptr);
//                 } else if (typeof ptr == "object") {
//                     $pointer = ptr;
//                 }

//                 if (!($pointer.is('img'))) {
//                     alert('Object must be image.');
//                     return false;
//                 }

//                 magnification = +(magnification);

//                 $pointer.hover(function () {
//                     $(this).css('cursor', 'none');
//                     $('.magnify').show();
//                     //Setting some variables for later use
//                     var width = $(this).width();
//                     var height = $(this).height();
//                     var src = $(this).attr('src');
//                     var imagePos = $(this).offset();
//                     var image = $(this);

//                     if (magnifierSize == undefined) {
//                         magnifierSize = '150px';
//                     }

//                     $('.magnify').css({
//                         'background-size': width * magnification + 'px ' + height * magnification + "px",
//                         'background-image': 'url("' + src + '")',
//                         'width': magnifierSize,
//                         'height': magnifierSize
//                     });

//                     //Setting a few more...
//                     var magnifyOffset = +($('.magnify').width() / 2);
//                     var rightSide = +(imagePos.left + $(this).width());
//                     var bottomSide = +(imagePos.top + $(this).height());

//                     $(document).mousemove(function (e) {
//                         if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
//                             $('.magnify').hide();
//                             $(document).unbind('mousemove');
//                         }
//                         var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
//                         $('.magnify').css({
//                             'left': e.pageX - magnifyOffset,
//                             'top': e.pageY - magnifyOffset,
//                             'background-position': backgroundPos
//                         });
//                     });
//                 }, function () {

//                 });
//             };

//             this.init = function () {
//                 $('body').prepend('<div class="magnify"></div>');
//             }

//             return this.init();
//         }

//         var magnify = new magnifier();
//         magnify.magnifyImg('#main-img', magnification, magnifierSize);

//MUSIC
function music() {
  console.log("fff");
  document.getElementById("myAudio1").play();
  setTimeout(function () {
    console.log("sss");
    document.getElementById("myAudio2").play();
  }, 8000);
}

//for images
function changeImage1() {
  var src1 = document.getElementById("img-1").src;
  console.log(src1);
  document.getElementById("img-1").style.border = "5px solid orange";
  document.getElementById("img-2").style.border = "0px";
  document.getElementById("img-3").style.border = "0px";
  document.getElementById("main-img").src = src1;
}
function changeImage2() {
  var src2 = document.getElementById("img-2").src;
  console.log(src2);
  document.getElementById("img-1").style.border = "0px";
  document.getElementById("img-2").style.border = "5px solid orange";
  document.getElementById("img-3").style.border = "0px";
  document.getElementById("main-img").src = src2;
}
function changeImage3() {
  var src3 = document.getElementById("img-3").src;
  console.log(src3);
  document.getElementById("img-1").style.border = "0px";
  document.getElementById("img-2").style.border = "0px";
  document.getElementById("img-3").style.border = "5px solid orange";
  document.getElementById("main-img").src = src3;
}