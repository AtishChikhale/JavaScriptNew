// for loop 5 table
// for (let i = 5; i <= 50; i = i + 5) {
//   console.log(i);
// }

// i = 5

// 1 - 5 addition

// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// ==================================================
// while

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// 2 table
// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i = i + 2;
// }

// ==========================================================

// break
// 1 - 5
// 3 came outside of loop
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i == 3) {
//     break;
//   }
// }

// =====================================================
// continue
// 1 - 5  3 => 1 2 4 5

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i == 3) {
//     continue;
//   }
// }

// =======================================================

// while break and continue
// 1 - 5  3=>break
// let i = 1;
// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

let i = 1;
while (i <= 5) {
  console.log(i);
    if (i == 3) {
    break;
  }
  i++;
}
