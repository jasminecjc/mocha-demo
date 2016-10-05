const assert = require('assert');
const hello = require('../hello.js');
const fs = require('fs');
const syncSum = hello.syncSum;
const asyncSum = hello.asyncSum;

describe('hello.js', () => {
    describe('syncSum', () => {
        it('syncSum() should return 0', () => assert.strictEqual(syncSum(), 0));
        it('syncSum(1) should return 1', () => assert.strictEqual(syncSum(1), 1));
        it('syncSum(1,2,3) should return 6', () => assert.strictEqual(syncSum(1,2,3), 6));
    })
    describe('asyncSum', (done) => {
        it('asyncSum test 1', (done) => {
            (async () => {
                try {
                    let res = await asyncSum();
                    assert.strictEqual(res, 15);
                    done();
                } catch(err) {
                    done(err);
                }
            })()
        })
        it('asyncSum test 2', async () => {
            let res = await asyncSum();
            assert.strictEqual(res, 15);
        })
        it('asyncSum test 3', (done) => {
            fs.readFile('test.txt', (err, data) => {
                if(err) {
                    done(err);
                } else {
                    done();
                }
            })
        })
    })
});


