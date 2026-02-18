function fibonaki(n){
    if(n===1) return [0]
    if(n===2) return [0,1]
    let array = [0,1]
    for(let i = 2; i<n; i++){
        array[i]=array[i-1]+array[i-2]
    }
    return array
}
console.log(fibonaki(10))


function fibo(n){
    if(n===1) return [0]
    if(n===2) return [5,5]
    let arr = [5,5]
    for(let i = 2;i<n;i++){
        arr[i]=arr[i-1]+ arr[i-2]
    }
    return arr
}

console.log(fibo(5))