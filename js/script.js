"use strict";

// let counter = 1;

// do {
//   if (counter == 6) {
//     break;
//   }
//   document.write("This id demo " + counter + "<br>");

//   counter++;
// } while (counter <= 10);

// // let counter = 10;

// // while (counter > 0) {
// //   document.write("This id demo " + counter + "<br>");
// //   if (counter == 2) {
// //     break;
// //   }
// //   counter--;
// // }

// let user = "";

// while (true) {
//   let userValue = prompt("Type your name");

//   if (!userValue) {
//     break;
//   }

//   user = user + " " + userValue;
// }

// document.write(user);

// const selected = "brand";

// const carValue = {
//   brand: "Audi",
//   color: "Yellow",
//   model: "A4",
//   price: 45500,
// };

// console.log(carValue[selected]);

// let myNumber = [1, 2, 3, 4, 5];

// let myName = ["polin", "sumi", "zayan", "parvin"];

// let myObject = [
//   { brand: "BMW", model: "X7", price: "45800" },
//   { brand: "Audi", model: "A4", price: "40000" },
// ];

// myObject[1] = { brand: "Tata", model: "T140", price: "1000" };

// console.log(myObject);

// for (let count = 1; count <= 5; count++) {
//   document.write("This id demo " + count + "<br>");
// }

// function helloTwo(textTwo, textThree, textFour, textFive) {
//   if (textThree == 20 && textFour == 40) {
//     textTwo();
//   } else {
//     textFive();
//   }
// }

// let myFunction = () => {
//   alert("This is demo");
// };

// let myFunctionTwo = () => {
//   alert("Please check again!");
// };

// let myNum1 = 20;
// let myNum2 = 40;

// helloTwo(myFunction, myNum1, myNum2, myFunctionTwo);
// let myName = "Polin";

// let myName = 1

// for (myName = 5; myName <= 10; myName++) {
//   document.write(myName + "<br>");
// }

// // if (myName !== undefined && myName !== null) {
// //   test = "Test is defined";
// // } else {
// //   test = "Test is undefined";
// // }

// // test = myName !== undefined && myName !== null ? "defined" : "undefined";

// test = myName ?? alert("undefined");

// // alert(test);

// let count = 1;

// // while (count <= 10) {
// //   if (count == 6) {
// //     break;
// //   }
// //   document.write(count);
// //   count++;
// // }

// for (count; count <= 10; count++) {
//   document.write("This is value " + count + "<br>");
//   if (count == 2 ) {
//     for (let text = 1; text <= 5; text++) {
//       document.write("------This is value " + text + "<br>");
//     }
//   }
// }

// document.addEventListener("keydown", function (event) {
//   for (let i = 1; i < event.length; i++) {
//     if (event) {
//       let keyBoard = event.key;
//       alert(keyBoard.toUpperCase());
//     }
//   }
// });

// let someName = ["polin", "zayan", "sumi", "parvin", "kajol"];

// for (let i = 0; i < someName.length; i++) {
//   console.log(someName[i]);
// }

let modalOpen = document.querySelectorAll("#modal-open");
let modalPopUp = document.getElementById("modal-popup");
let overlay = document.getElementById("overlay");
let modalClose = document.getElementById("modal-close");

let modalOpenFunc = function () {
  modalPopUp.classList.add("active");
  overlay.classList.add("modal-overlay");
};

let modalCloseFunc = function () {
  modalPopUp.classList.remove("active");
  overlay.classList.remove("modal-overlay");
};

for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener("click", modalOpenFunc);
  modalClose.addEventListener("click", modalCloseFunc);
  overlay.addEventListener("click", modalCloseFunc);
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      modalCloseFunc();
    }
  });
}
