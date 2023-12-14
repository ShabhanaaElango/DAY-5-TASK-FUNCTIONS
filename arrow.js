// a.Printing odd numbers in an array
let arr1 = [1,2,3,4,5,6,7,8,9,10];
var odd =() =>
{
for(var value of arr1)
{
    if((value%2)!==0)
    {
    console.log(value);
    }
}
}
odd(arr1);

// b.converting string to titlecase
var tcase = (str)=>
{
    str = str.toLowerCase().split(' ');
    for(var i = 0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(tcase("Hi how are you my friend?"));

// c.sum of all numbers in an array
var sum = ()=>
{
    var sum1 = 0;
    for (var x in arr1)
    {  
        sum1 = sum1 + arr1[x];
    }
    console.log(sum1);
}
sum(arr1);

//d.Return prime numbers in array
var prime = () =>
{
    for(var i of arr1)
    {
        var count = 0;
    for(var j = 1; j<=arr1[i];j++)
    {
        if(arr1[i]%j == 0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        console.log(arr1[i]);
    }
    }  
}
prime(arr1);

//e.Return all palindrome numbers in array.
let a = [121,23,123321,67];
var n = a.length;
var check = ()=>{
    for(var j = 0;j<n;j++)
    if(palindrome(a[j])==1){
        console.log(a[j]);
    }
}

function palindrome(value) 
{
        var  rem;
        let temp = value;
        let reverse = 0;
        while(value!=0)
        {
            rem = value%10;
            reverse = reverse*10 + rem;
            value = parseInt(value/10);
        }
        if(reverse==temp)
    return 1;
 }check(a,n); 
 
