var assert = require("assert");

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not exist', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })

        it('should return 0 when the value is exist', function () {
            console.log('this is test');
            assert.equal(0, [1,2,3].indexOf(1));
            assert.equal(1, [1,2,3].indexOf(2));
        })
    })
});