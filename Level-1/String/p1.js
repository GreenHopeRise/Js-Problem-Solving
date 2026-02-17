function reverseString (str){
    let reverse = ''
    for(let i = str.length-1; i>=0; i--){
        
        reverse= reverse+ str[i]
    }
    return reverse
}

console.log(reverseString('hello'))


function reverseString2(str){
    let newString =''
    for(let i= str.length-1;i>=0;i--){
        newString=newString+str[i]
    }
    return newString

}
console.log(reverseString2('hi baby'))