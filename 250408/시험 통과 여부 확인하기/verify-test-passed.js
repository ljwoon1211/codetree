const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('line', function (line) {
    let res
    line >= 80 ? res='pass': res=`${80-line} more score` 
    console.log(res)
  rl.close();
}).on('close', function () {
  process.exit();
});