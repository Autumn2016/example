fs = require('fs');

fs.writeFile()

describe('File', function(){
    describe('#readFile()', function(){
        it('should read test.ls without error', function(){
            fs.readFile('test.ls', function(err){
                if (err) throw err;

                console.log('first');
            });
        });

        console.log('second');
    })
})