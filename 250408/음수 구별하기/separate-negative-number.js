const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', function (line) {
  const x = Number(line);
  let res;

  // 올바른 조건 확인
  if (x >= 0 && x <= 100) {
    res = "plus";
    console.log(x)

  } else if (x < 0 || x <= -100) {
    res = "minus";
    console.log(x)
    console.log(res)
  } 
 
  rl.close();
}).on('close', function () {
  process.exit();
});