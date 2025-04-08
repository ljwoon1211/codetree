const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('line', function (line) {
    const [a,b] = line.split(' ').map((x)=>Number(x))
    a<b? console.log('1 0') : a==b?  console.log('0 1') : console.log('0 0')
    


  rl.close();
}).on('close', function () {
  process.exit();
});
