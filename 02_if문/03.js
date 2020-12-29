const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const value = parseInt(input);

if (value % 4 == 0 && (value % 100 != 0 || value % 400 == 0)) {
  console.log(1);
} else {
  console.log(0);
}