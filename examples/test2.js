for (var i = 0; i < 5; i++) {
    var a = function(v){
        return function(){
            console.log(v)
        }
    }
    setTimeout(a(i),10)
}
