/// Câu 2
let n = 5;
for (let i = 1; i <= n; i++) {
  let line = ""

  for (let j = 1; j <= n - i; j++) {
    line = line + " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    line = line + "*"
  }

  console.log(line);
}