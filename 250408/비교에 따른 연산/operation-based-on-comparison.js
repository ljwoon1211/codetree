const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('line', function (line) {
    const [a,b] = line.split(' ').map((x)=>Number(x))
    let res;
    res = a > b ? a*b: parseInt(b/a)
    console.log(res)
  rl.close();
}).on('close', function () {
  process.exit();
});