module.exports = function () {
    var testFunc = {
        
        Prefix : 'txt',
        
        test1 : function () {
            console.log('this is test one');
        },

        test2 : function () {
            console.log('this is test two');
        },
        
        test3 : function () {
            console.log('this is ' + testFunc.Prefix);
        }
    };
    
    return testFunc;
};


