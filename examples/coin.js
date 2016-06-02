/**
 * Created by qiuyi on 16-4-20.
 */
/**
 * Created by qiuyi on 16-4-20.
 */
var base1 = 10;
var base2 = 100;

var money1 = base1;
var money2 = base2;
var result = 0;
var num1 =0;
var num2 = 0;

//Math.floor(num)
//Math.random()
for (var i=0; i<10000; i++){
    while(1) {
        if(money1==0){
            console.log('money1 is zero');
            num1++;

            money1 = base1;
            money2 = base2;
            break;
        }
        if(money2==0){
            console.log('money2 is zero');
            num2++;

            money1 = base1;
            money2 = base2;
            break;
        }

        result = Math.floor(10*Math.random());
        if(result%2 == 0){
            money1--;
            money2++;
        }else{
            money1++
            money2--;
        }
    }
}

console.log('num1=', num1);
console.log('num2=', num2);
var sum = num1+num2;
console.log('num1/(num1+num2)=',(num1/sum).toFixed(4)*100+'%');
