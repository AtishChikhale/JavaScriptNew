// 1-10

// for (i = 1; i <= 5; i++) {  // i = 1, 2, 3, 4, 5, 6
//   //1<=5 => true 2<=5 => true 3<=5 => true 4<=5 => true 5<=5 => true 6<=5 => false
//   console.log(i); // 1, 2, 3, 4, 5, out from the loop
//   //1+1=2, 1+2=3, 1+3=4, 1+4=5, 1+5=6
// }

// 10-1
// for (i = 5; i >= 1; i--) { // i = 5, 4, 3, 2, 1, 0
//   //5>=1 => true, 4>=1 => true, 3>=1 => true, 2>=1 => true, 1>=1 => true, 0>=1 => false
//   console.log(i); //5, 4, 3, 2, 1, it will out from the loop
//   //5-1=4, 4-1=3, 3-1=2, 2-1=1, 1-1=0
// }

// loop
// break statement => to come outside of the loop

//1-5 => 3

// for (i = 1; i <= 5; i++) {
//   //i=1, 2, 3
//   //1<=5=>true, 2<=5=>true, 3<=5=>true
//   if (i == 3) {
//     //1==3=>false, 2==3=>false, 3==3
//     break; //it will break
//   }
//   console.log(i); //1, 2
// }

for (i = 1; i <= 5; i++) {
  //i=1, 2, 3, 4
  //1<=5=>true, 2<=5=>true, 3<=5=>true
  console.log(i); //1, 2, 3
  if (i == 3) {
    //1==3=>false, 2==3=>false, 3==3=>true
    break; 
  }
}

// continue => perticullar condition escape
// 1 2 3 4 5 => 1 2 4 5
// for (i = 1; i <= 5; i++) {
//   //2, 3, 4, 5, 6
//   //1<=5=>true, 2<=5=>true, 3<=5=>true, 4<=5=>true, 5<=5=>true, 6<=5=>false
//   if (i == 3) {//1==3=>false, 2==3=>false, 3==3=>true, 4==3=>false, 5==5=>true
//     continue;
//   }
//   console.log(i);//1, 2, 4, 5
// }

// for (i = 1; i <= 5; i++) {
//   //i => 2, 3, 4, 5, 6
//   //1<=5=>true, 2<=5=>true, 3<=5=>true, 4<=5=>true, 5<=5=>true, 6<=5=>false
//   console.log(i); //1, 2, 3, 4, 5
//   if (i == 3) {
//     //1==3=>false, 2==3=>false, 3==3=>true, 4==3=>false, 5==3=>false
//     continue;
//   }
// }
