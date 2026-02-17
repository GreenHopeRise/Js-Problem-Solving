function capitalize(str){
    let separetArray = str.split(' ')
    for(let i = 0; i< separetArray.length; i++){
        separetArray[i]= separetArray[i][0].toUpperCase()+separetArray[i].slice(1)
    }
    let sentance = separetArray.join(' ')
    return sentance

}
console.log(capitalize('goru gas'))


function ap(s){
    let a = s.split(' ')
    for(let i = 0;i<a.length; i++){
        a[i]=a[i][0].toUpperCase() +a[i].slice(1)
    }
    let r = a.join(' ')
    return r
}

console.log(ap('hi ami khalid'))


function cap(str){
    let array = str.split(' ')
    for(let i = 0; i<array.length;i++){
        array[i]=array[i][0].toUpperCase()+array[i].slice(1)
        
    }
    let newLine = array.join(' ')
    return newLine
}
console.log(cap('ami vhalo achi'))
