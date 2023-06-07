function stringAnagram3 (str1: string, str2: string){
    let map = {};

    for(let i=0; i<str1.length; i++){
        map[str1.charAt(i)] = i+1;
    }

    for(let i=0; i<str2.length; i++){
        if(map[str2.charAt(i)]){
            delete map[str2.charAt(i)];
        } else {
            return false;
        }
    }

    return true;
}

console.log(stringAnagram3('catk', 'actk'));