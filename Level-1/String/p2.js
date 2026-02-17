function palindrome(str){
    let actuallStr = str
    let rev = ''
for(let i = str.length-1; i>=0; i--){
    rev += str[i]
}
if(actuallStr===rev)
    return true
else return false

}

console.log(palindrome('madam'))

// update version 

function isPalindrome(str){
    let first = 0
    let last = str.length-1
    while(first<last){
        if(str[first]!==str[last]){

            return false
        }
        first++
        last--
    }
    return true
}

console.log(isPalindrome('hello'))
console.log(isPalindrome('madam'))


function isPalindrome2(str){
    let start = 0
    let end = str.length-1
    while(start<end){
        if(str[start]!==str[end]){
            return false
        }
        start++
        end--
    }
    return true
}
console.log('hi')
console.log(isPalindrome2('madam'))