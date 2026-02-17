// Factorial 
function factorial(n){
    let fac=1
    if(n===0||n===1) return 1
    for(let i = 1; i<=n; i++ ){
        fac=fac*i
    }
    return fac
}
console.log(factorial(5))