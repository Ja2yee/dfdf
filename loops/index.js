// for (let i = 0; i < 5; i++) {
//   console.log("i is :", i);
// }
// for (let j = 0; j < 5; j++) {
//   console.log("j is:", j++);
// }
// for (let k = 0; k < 5; k++) {
//   console.log("K is:", ++k);
// }
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (i = 1; i <= n; i++) {
  sum += (i + 1);
}
console.log("Sum of first " + n + " natural numbers is: " + sum);
