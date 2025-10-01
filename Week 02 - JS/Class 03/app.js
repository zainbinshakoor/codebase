var num = [1, 2, 3, 4, 5, 6];

// var numSq = num.map((value, index, arr) => {
//   return value * value;
// });

// console.log(numSq)

// var sum = num.reduce((total,value)=>{
//     return total + value
// },0)

// var filteredNum = num.filter((value)=>{
//     return value !== 2
// })

// num.forEach((value) => {
//   console.log(value);
// });

// console.log(
//   num.find((value) => {
//     return value == 2;
//   })
// );
// console.log(
//   num.findIndex((value) => {
//     return value == 2;
//   })
// );

// var day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("invalid day!")
// }

// for loop
// while
// do while

// for (var i = 1; i <= 10; i++) {
// //   console.log("count: " + i);
//   if (i == 5) {
//     console.log("stopped");
//     break;
//   }

//   console.log("2 x " + i + " = " + 2 * i);
// }

// var i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 0);

function submit() {
  var name = document.getElementById("text-field").value;

 document.write("name: " + name);
}
