function f(s){
    let a = s.split(' ')
    let b =0
    let r= ''
    for(let i= 0; i<a.length;i++){
        if(a[i].length>b){
            b=a[i].length
            r=a[i]
        }

    }
    return r

}
console.log(f('ami vhalo ache'))

function big(str){
    let arr= str.split(' ')
    let b=0
    let r=''
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>b){
            b=arr[i].length
            r=arr[i]
        }
    }
    return r
}
console.log(big('kalke exam ache computer graphics er upore'))