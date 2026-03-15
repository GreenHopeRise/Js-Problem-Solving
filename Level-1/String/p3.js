function vowelCounter(str){
    let count = 0
    for(let i =0; i<=str.length;i++){
        if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'||str[i]==='A'||str[i]==='E'||str[i]==='I'||str[i]==='O'||str[i]==='U'){
            count =count +1
        }
    }
    return count

}
// console.log(vowelCounter('YOu'))


function vowel(str){
    let count =0
    for(let i=0; i<str.length;i++){
        if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
            count=count + 1
        }
    }
 return count
}

console.log(vowel('ami vhalo nai'))


