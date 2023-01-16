// console.log(document.domain);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// document.title = "SAC";
// console.log(document.URL);
// console.log(document.images);
// console.log(document.forms[0]);

// GETELEMENTBYid
// console.log(document.getElementById('main-body'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "BYEEEEE"
// headerTitle.innerText = "OKKKK"
// headerTitle.innerHTML = "<h3> HELLO </h3>";
// headerTitle.style.border = "solid 3px white";
// headerTitle.style.paddingLeft = "50px"

// GETELEMENTBYclassname
// var paragraphClass = document.getElementsByClassName('paragraph');
// console.log(pagraphClass);

// GETELEMENTBYtag

// var buttons = document.getElementsByTagName('p');
// console.log(buttons);
// buttons[2].style.color = "white";
// buttons[0].innerHTML = "hello"

// for( var i=0; i<buttons.length; i++){
//     buttons[i].style.fontFamily = 'cursive';
//     buttons[i].style.backgroundColor = 'black';
//     buttons[i].style.color = 'white';
// }

// QUERYSELECTER
// var header = document.querySelector'#header-title');
// console.log(header);
// header.style.border = "solid 2px white";

// QreySelectorALL;
// var header = document.querySelectorAll("#header-title");
// console.log(header);
// header[1].textContent = "BYEEEE";

// var odd = document.querySelectorAll("h2:nth-child(odd)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.border = "solid 2px white";

// BUTTO1 function
document.getElementsByClassName(".button1").addEventListener("click", function () {
  document.getElementsById("#main-body").style.backgroundColor = "yellow";
});

// //BUTTO2 function
// document.getElementsByClassName("button2").addEventListener("click", function () {
//   document.getElementsById("main-body").style.backgroundColor = "orange";
// });

// //BUTTO3 function
// document.getElementsByClassName("button3").addEventListener("click", function () {
//   document.getElementsById("main-body").style.backgroundColor = "green";
// });

// //BUTTO4 function
// document.getElementsByClassName("button4").addEventListener("click", function () {
//   document.getElementsById("main-body").style.backgroundColor = "tomato";
// });


// document.title = 'J-Tech'

// var headerTitle = document.getElementById('header-title');

// headerTitle.textContent = "BYEEEEE"
// headerTitle.innerHTML = "<h3> HELLO </h3>";
// headerTitle.style.border = "solid 3px white";
// headerTitle.style.paddingLeft = "500px"

// var odd = document.querySelectorAll("h2");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.color = 'yellow'  
//   odd[i].style.border = "solid 2px white";
// }

function changeColor(color){
document.querySelector("#main-body").style.backgroundColor = color;
console.log(color);
}

