const fs = require('fs');

fs.stat('data/text.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    let sF = stats.isFile(); // true
    let sD = stats.isDirectory(); // false
    let sS = stats.isSymbolicLink(); // false
    let sSz = stats.size; // 1024000 //= 1MB
    console.log(sF, sD, sS, sSz)
});
