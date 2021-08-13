let n = 5;
let string = "";

for (let i = 1; i <= n; i += 1) {
  //Space
  for (let iSpace = 0; iSpace < n - i; iSpace += 1) {
    string += " ";
  }
  //Star
  for (let iStar = 1; iStar < 2 * i - 4; iStar += 1) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
