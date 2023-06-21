function stringAnagram (str1: string, str2: string){
    for(let i=0; i<str1.length; i++){
        let flag = false;
        for(let j=0; j<str2.length; j++){
            if( str1.charAt(i) == str2.charAt(j) ){
                flag = true;
                continue;
            }
        }

        if(!flag){
            return false;
        }
    }

    return true;
}

console.log(stringAnagram('cata', 'actt'));