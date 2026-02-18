function sumOfDigit(n){
    let sum =0
    while(n>0){
        sum = sum+ n%10
        n=Math.floor(n/10)
    }

    return sum
}
console.log(sumOfDigit(56))
// done baby 