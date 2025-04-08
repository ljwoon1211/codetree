const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('line', function (line) {
    const nums = line.split(' ')
    const a = Number(nums[0]);
    const b = Number(nums[1]);
    console.log(a >= b ? 1 : 0);  
    console.log(a > b ? 1 : 0);  
    console.log(a <= b ? 1 : 0); 
    console.log(a < b ? 1 : 0);   
    console.log(a === b ? 1 : 0); 
    console.log(a !== b ? 1 : 0); 

  rl.close();
}).on('close', function () {
  process.exit();
});
