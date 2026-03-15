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

function palindromeUpdate(x){
    let first = 0
    let last = x.length-1
    while(first<last){
        if(x[first]!==x[last]){
            return 'not palindrome'
        }
        first++
        last--
    }
    return 'palindrome'
}

console.log(palindromeUpdate('madam'))


// vowle counter
function vowleCounter(x){
    let count = 0
    for(let i = 0; i<x.length; i++){
        if(x[i]===' ')continue
        if(x[i]=== 'a'||x[i]=== 'e'||x[i]=== 'i'||x[i]=== 'o'||x[i]=== 'u'||x[i]=== 'A'||x[i]=== 'E'||x[i]=== 'I'||x[i]=== 'O'||x[i]=== 'U'){
            count=count+1
        }
    }
    return count
}
console.log(vowleCounter('ami onek vhalo achi'))




// Capitalize the first letter of each word.
function capSentance(x){
    let y = x.split(' ')
    for(let i = 0; i< y.length; i++){
        y[i]=y[i][0].toUpperCase()+ y[i].slice(1)
    }
    let sentance = y.join(' ')
    return sentance

}
console.log(capSentance('hi ami koi'))


// Find the longest word in a sentence.

function longestWord(x){
    let max = 0
    let word =''
    let arr = x.split(' ')
    for(let i = 0; i<arr.length;i++){
        if(arr[i].length >max){
            max= arr[i].length
            word = arr[i]

        }
    }
    return word
}
console.log(longestWord('mon amar taito j aj pekhom tule nache re'))