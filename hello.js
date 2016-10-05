const fs = require('mz/fs');

const syncSum = (...rest) => {
    let sum = 0;
    for(let n of rest) {
        sum += n;
    }
    return sum;
}

const asyncSum = async () => {
    let expressions = await fs.readFile('test.txt','utf-8');
    let fn = new Function('return ' + expressions);
    let r = fn();
    console.log(`calculate ${expressions} = ${r}`);
    return r; 
}

module.exports = {
    syncSum: syncSum,
    asyncSum: asyncSum
};
