// Star Pattern 

let noRows = 5;
let print = "";
for (let i = 1; i <= noRows; i++) {
  for (let j = 0; j < i; j++) {
    print += "*";
  }
  print += '\n';
}
console.log(print);