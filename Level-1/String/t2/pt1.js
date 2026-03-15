// 1. Reverse String 
function reverseString(x){
    let rev =''
    for(let i =x.length-1; i>=0;i--){
        rev= rev+ x[i]
    }
    return rev
}
console.log(reverseString('hello'))


// palindrome or not

function palindrome(x){
    let pal =''
    for(let i = x.length-1; i>=0;i--){
        pal = pal + x[i]
    }
    if(pal === x){
        return 'palindrome'
    }
    else return 'not palindrome'
}
console.log(palindrome('mad'))