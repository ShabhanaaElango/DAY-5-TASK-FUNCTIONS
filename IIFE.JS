// a.Printing odd numbers in an array
let arr1 = [1,2,3,4,5,6,7,8,9,10];
(function odd()
{
for(var value of arr1)
{
    if((value%2)!==0)
    {
    console.log(value);
    }
}
})(arr1);

//b.converting string to titlecase
(function tcase(str)
{
    str = str.toLowerCase().split(' ');
    for(var i = 0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
})
console.log(tcase("Hi how are you my friend?"));

// c.sum of all numbers in an array
function sum()
{
    var sum = 0;
    for (var x in arr1)
    {  
        sum = sum + arr1[x];
    }
    console.log(sum);
}
sum(arr1);

//d.Return prime numbers in array
(function prime()
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
    
})(arr1);

//e.Return all palindrome numbers in array.
let a = [121,23,123321,67];
var n = a.length;
(function check(){
    for(var j = 0;j<n;j++)
    if(palindrome(a[j])==1){
        console.log(a[j]);
    }
})(a,n); 

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
 }   
    

//f.Return the median of two sorted array
  let a1 =[2,5,7,12,15];
  let a2 =[3,6,8,13,20];
  var n = 5;
  (function median()
  {
    var i = 0;
    var j = 0;
    var m1 = -1;
    var m2 = -1;
    for(var count = 0;count<=n;count++)
    {
        if(i==n){
            m1 = m2;
            m2 = a2[0];
        }
        else if(j==n){
            m1 = m2;
            m2 = a1[0];
        }
        if(a1[i]<= a2[j])
        {
            m1 = m2;
            m2 = a1[i];
            i++;
        }else
        {
            m1 = m2;
            m2 = a2[j];
            j++;
        }
    }
    console.log('Median is ' +(m1+m2)/2);
  })(a1,a2,n);

//g.Remove dulicates from an array
let  arr2 = [4,5,6,7,4,6];
(function remove()
{
    arr2 = [...new Set(arr2)];
    console.log(arr2);
})(arr2);

// H.Rotate an array by k times
let arr = [2,5,3,1,4];
let arrnew = [];
var k = 3;
k = k % arr.length;
(function krotate(){
for (var i = 0; i<arr.length;i++)
{
    if(i<k)
    arrnew[i]=(arr[arr.length+i-k]);
    else
    arrnew[i]=(arr[i-k]);
}
console.log(arrnew);
})(arr);

 