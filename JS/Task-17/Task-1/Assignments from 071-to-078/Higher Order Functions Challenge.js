/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter( (ele, index, arr) => isNaN(ele) && ele !== ',' && index < arr.length - true)
  .map((ele) => ele === '_' ? ' ' : ele)
  .reduce((acc, cur) => acc === cur ? acc : acc + cur);

console.log(solution); 

// Elzero Web School