// while => break and continue

//initialization
// while(condition){
// statement
// increment/decrement
// }

// infinity loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// 10 - 1
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// ===========================================================

// break
// 1 - 5 ===> 3
// let i = 1;//2, 3
// while (i <= 5) {//1<=5=>true, 2<=5=>true, 3<=5=>true
//   if (i == 3) {//1==3=>false, 2==3=>false, 3==3=>false
//     break;
//   }
//   console.log(i);//1, 2
//   i++;//2, 3
// }

// let i = 1;//2, 3
// while (i <= 5) {//1<=5=>true, 2<=5=>true, 3<=5=>true
//   console.log(i);//1, 2, 3
//   if (i == 3) {//1==3=>false, 2==3=>false, 3==3=>true
//     break;
//   }
//   i++;//2, 3
// }

// continue

// 1-5 3 ===> continue

// let i = 0;//i=0, 1, 2, 3,
// while (i <= 5) {
//     //0<=5=>false, 1<=5=>false, 2<=5=>false, 3<=5=>true
//   if (i == 3) {
//     //0==3=>false,  1==3=>false, 2==3=>false, 3==3=>true
//     continue;
//   }
//   console.log(i);//0, 1, 2
//   i++;//1, 2, 3
// }

// let i = 0; //i=0, 1, 3, 4, 5, 6
// while (i <= 5) {
//   //0<=5=>false, 1<=5=>false, 2<=5=>false, 3<=5=>false, 4<=5=>false, 5<=5=>true, 6<=5=>false
//   if (i == 3) {
//     //0==3=>false, 1==3=>false, 2==3=>false, 3==3=>true, 4==3=>false, 5==3=>false, 6==3=>false
//     i++;//4
//     continue;
//   }
//   console.log(i);//0, 1, 2, 4, 5
//   i++;//1, 2, 3, 5, 6
// }

let i = 1; //i = 1, 2, 3, 4, 5, 6
while (i <= 5) {
  //1<=5=>false, 2<=5=>false, 3<=5=>false, 4<=5=>false, 5<=5true, 6<=5=>false
  console.log(i); //1, 2, 3, 4, 5
  if (i > 3) {
    //1>3=>false, 2>3=>false, 3>3=>false, 4>3=>true, 5>3=>true
    i++; //5, 6
    continue;
  }
  i++; //2, 3, 4
}

// let i = 0;// i = 0, 1, 2, 3, 4, 6
// while (i <= 5) {
//   //0<=5=>true, 1<=5=>true, 2<=5=>false, 3<=5=>false, 4<=5=>false, 5<=5=>true, 6<=5=>false
//   console.log(i); //0, 1, 2, 3, 4, 5
//   if (i > 3) {
//     //0>3=>false, 1>3=>false, 2>3=>false, 3>3=false, 4>3=>true, 5>3=>true
//     i++;//5, 6
//     continue;
//   }
//   i++;//1, 2, 3, 4, 6
// }
