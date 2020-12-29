const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    const N = parseInt(line);
    let result = '';
    
    for (let row = 0; row < N; row++) {
        let stars = '';
        let blank = '';
        
        for (let b = 0; b < N - row - 1; b++) {
            blank += ' ';
        }
        
        for (let col = 0; col <= row; col++) {
            stars += '*';
        }
        
        result += blank + stars + '\n';
    }
    
    console.log(result);
}).on('close', () => {
    process.exit();
});