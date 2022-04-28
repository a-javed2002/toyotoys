//MUSIC
function go() {
  document.getElementById("myAudio").play();
}
/*CART*/
let global_variable_item;
let global_variable_price;
let global_variable_img;
let global_variable_link;
let global_variable_total;
let str3;
let previous_value;
let price;
let quantity;
let temp2;

// str += `
//       <tr>
//           <th scope="row">${index + 1}</th>
//             <td><a href=${element[4]}><img src=${element[3]} alt="picture" width="120px" height="100px" style="padding-right:20px;"></a>${element[0]}</td>
//           <td><input class="form-control" id="q-${index + 1}" min="1" max="5" title="max 5" onchange="itemPrice('price-${index + 1}','q-${index + 1}')" style="text-align:center;width:70%;margin:30px auto;" type="number" value="1" pattern="[1-9]{1,}"></td>
//           <td><d style="position:relative;top:33px;" id="price-${index + 1}">${element[2]}</div></td>
//           <td> <button style="margin:30px 0px;" class="btn btn-sm btn-outline-danger" onclick="deleted('${
//             element[0]
//           }',${element[2]})">Remove</button> </td>
//       </tr>`;

function add_to_cart(item, img, price,link) {
  global_variable_item = item;
  global_variable_price = price;
  global_variable_img=img;
  global_variable_link=link;
  localStorage.setItem("add_to_cart_item", global_variable_item);
  localStorage.setItem("add_to_cart_price", global_variable_price);
  localStorage.setItem("add_to_cart_img", global_variable_img);
  localStorage.setItem("add_to_cart_link", global_variable_link);
  console.log(global_variable_item + "\n");
  console.log(global_variable_price + "\n");
  console.log(global_variable_img + "\n");
  console.log(global_variable_link + "\n");
  cartClick()
  countCheck();
  cart();
}
function cart() {
  global_variable_item = localStorage.getItem("add_to_cart_item");
  global_variable_price = localStorage.getItem("add_to_cart_price");
  global_variable_img = localStorage.getItem("add_to_cart_img");
  global_variable_link = localStorage.getItem("add_to_cart_link");
  getAndUpdate();
  update();
  receipt();
}
function update() {
  global_variable_item = localStorage.getItem("add_to_cart_item");
  global_variable_price = localStorage.getItem("add_to_cart_price");
  global_variable_img = localStorage.getItem("add_to_cart_img");
  global_variable_link = localStorage.getItem("add_to_cart_link");
  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  let tableBody = document.getElementById("tableBody");
  let str = "";
  let str2 = "";
  itemJsonArray.forEach((element, index) => {
    str += `
      <tr>
          <th scope="row">${index + 1}</th>
            <td>
            <table class="table table-responsive mb-5 mt-5">
            <tr>
                <td>
                    <a href=${element[4]}><img src=${element[3]} alt="picture" width="120px" height="100px"
                        style="padding-right:20px;"></a>
                </td>
                <td style="padding-top: 40px;font-weight: bolder;font-family: Verdana, Geneva, Tahoma, sans-serif;">${element[0]}</td>
            </tr>
        </table>
            </td>
          <td><input class="form-control" id="q-${index + 1}" min="1" max="5" title="max 5" onchange="itemPrice('price-${index + 1}','q-${index + 1}','p-${index + 1}')" style="text-align:center;width:70%;margin:80px auto;" type="number" value="1" pattern="[1-9]{1,}"></td>
          <td><d style="position:relative;top:83px;" id="price-${index + 1}">${element[2]}</div></td>
          <td> <button style="margin:80px 0px;" class="btn btn-sm btn-outline-danger" onclick="deleted('${element[0]}')">Remove</button> </td>
          <td style="display: none;"><div style="position:relative;top:83px;" id="p-${index + 1}">${element[2]}</div></td>
      </tr>`;
  document.getElementById("counter").innerHTML=`${index+1}`;
  // str3=parseFloat(global_variable_total)+parseFloat(`${element[2]}`);
});
// document.getElementById("total-cart-bill").innerHTML=str3;
  tableBody.innerHTML = str;
}
function getAndUpdate() {
  console.log("Updating List....");
  console.log(global_variable_item);
  console.log(global_variable_price);
  console.log(global_variable_img);
  console.log(global_variable_link);
  // // SETTING DAY NAME
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // a = new Date();
  // date = a.toLocaleDateString();
  // c = a.getDay();
  // if (c == 1) {
  //   day = "Monday";
  // } else if (c == 2) {
  //   day = "Tuesday";
  // } else if (c == 3) {
  //   day = "Wednesday";
  // } else if (c == 4) {
  //   day = "Thursday";
  // } else if (c == 5) {
  //   day = "Friday";
  // } else if (c == 6) {
  //   day = "Saturday";
  // } else if (c == 7) {
  //   day = "Sunday";
  // }
  // // SETTING OF STANDARD TIME
  // h = String(a.getHours());
  // m = String(a.getMinutes());
  // s = String(a.getSeconds());
  // if (h.length == 1 && m.length == 1 && s.length == 1) {
  //   time = "0" + h + ":" + "0" + m + ":" + "0" + s;
  // } else if (h.length == 1 && m.length == 1) {
  //   time = "0" + h + ":" + "0" + m + ":" + s;
  // } else if (h.length == 1 && s.length == 1) {
  //   time = "0" + h + ":" + m + ":" + "0" + s;
  // } else if (m.length == 1 && s.length == 1) {
  //   time = h + ":" + "0" + m + ":" + "0" + s;
  // } else if (h.length == 1) {
  //   time = "0" + h + ":" + m + ":" + s;
  // } else if (m.length == 1) {
  //   time = h + ":" + "0" + m + ":" + s;
  // } else if (s.length == 1) {
  //   time = h + ":" + m + ":" + "0" + s;
  // } else {
  //   time = h + ":" + m + ":" + s;
  // }
  // //PRINTING DETAIL
  // dt = "Created at " + time + " on<br> " + day + "  " + date;

  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([
      global_variable_item,
      1,
      global_variable_price,
      global_variable_img
    ]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([
      global_variable_item,
      1,
      global_variable_price,
      global_variable_img,
      global_variable_link,
      global_variable_total
    ]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  }
  update();
}
function deleted(itemIndex, price) {
  console.log("Delete", itemIndex);
  console.log("Delete", price);
  itemJsonArrayStr = localStorage.getItem("itemJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  update();
  generateTotal();
  countCheck();
}
function clearStorage() {
  if (confirm("Do You Really Want To Clear?")) {
    console.log("Clearing The Storage");
    localStorage.clear();
    document.getElementById("total-cart-bill").innerHTML=0;
    update();
    document.getElementById("counter").innerHTML=0;
  countCheck();
  generateTotal();
  }
}
// function check_out() {
//   let discount;
//   let sales_tax;
//   let total_payable_bill;
//   global_variable_item = localStorage.getItem("add_to_cart_item");
//   global_variable_price = localStorage.getItem("add_to_cart_price");
//   global_variable_total = localStorage.getItem("add_to_cart_total");
//   if (document.getElementById("voucher").value != "") {
//     if (document.getElementById("voucher").value == "voucher5") {
//       discount = (total * 5) / 100;
//     } else if (document.getElementById("voucher").value == "voucher10") {
//       discount = (total * 10) / 100;
//     } else if (document.getElementById("voucher").value == "voucher15") {
//       discount = (total * 15) / 100;
//     }
//   } else {
//     discount = 0;
//   }

//   sales_tax = (total * 17) / 100;

//   total_payable_bill =
//     parseFloat(total) + parseFloat(sales_tax) - parseFloat(discount);
//   document.getElementById("total_items").innerHTML = total_items;
//   document.getElementById("total_amount").innerHTML = total;
//   document.getElementById("discount").innerHTML = discount;
//   document.getElementById("sales_tax").innerHTML = sales_tax;
//   document.getElementById("total_payable_bill").innerHTML = total_payable_bill;
// }
//MUSIC

      //   function playAudio() {
      //     document.getElementById("myAudio").play();
      // }

      // function pauseAudio() {
      //     document.getElementById("myAudio").pause();
      // }
      // slider start
      var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          slidesPerGroup: 1,
          breakpoints: {
              768: {
                  slidesPerView: 2,
              },
              991: {
                  slidesPerView: 3,
              },
          },
          loop: true,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          }
      });
      // slider end

      function buy_now(name, pic, price, link) {
        document.body.style.opacity = 0.75;
        document.getElementById("arrow").style.display = "none";
        document.getElementById("buy_now_bill").style.display = "block";
        // document.getElementById("bill-img").innerHTML='<img src='+ pic+ ' alt="picture" width="300px" height="300px">'
        document.getElementById("bill-img").innerHTML = '<a href=' + link + '><img src=' + pic + ' alt="picture" width="300px" height="300px"></a>';
        // document.getElementById("cart-continue").innerHTML = '<button type="button" class="btn btn-success" onclick="add_to_cart(' + name + ',' + pic + ',' + price + ',' + link + ') discard()">ADD TO CART AND SHOP MORE</button>'
        document.getElementById("pro-name").innerHTML = name;
        document.getElementById("price").innerHTML = parseFloat(price);
        document.getElementById("tprice").innerHTML = "$" + parseFloat(price);
        console.log("working");
        // document.getElementById("buy_now_bill").style.opacity=1;
        setTimeout(function () {
            document.body.style.overflow = "hidden"
        }, 3000);
    }

    function vary() {
        var quantity = document.getElementById("quantity").value;
        var price = document.getElementById("price").innerHTML;
        // alert(quantity+"  "+price);
        document.getElementById("tprice").innerHTML = "$" + parseFloat(price) * parseInt(quantity);
    }

    function discard() {
        if (confirm("Do You Really Want To Discard Order?")) {
            document.body.style.opacity = 1;
            document.getElementById("buy_now_bill").style.display = "none";
            document.getElementById("arrow").style.display = "block";
            document.body.style.overflow = "auto";
            setTimeout(function () {
                document.body.style.overflowX = "hidden"
            }, 500);
        }
    }

      function countCheck(){
        if (document.getElementById("counter").innerHTML == '0') {
          document.getElementById("counter").style.visibility = 'hidden';
      }
      else {
          console.log(document.getElementById("counter").innerHTML)
          document.getElementById("counter").style.visibility = 'visible';
      }
      }

      function generateTotal(){
        let total=0;
    let temp;
    let k=document.getElementById("counter").innerHTML;
    for (let i = 0; i < k; i++) {
        temp = document.getElementById("price-"+(i+1)).innerHTML
        total=parseFloat(total)+parseFloat(temp);
    }
    document.getElementById("total-cart-bill").innerHTML=total.toFixed(2);
    }
    function cartClick() {
      document.getElementById("cartClick").style.display = "block";
      setTimeout(function () {
      document.getElementById("cartClick").style.display = "none";
      }, 1500);
  }