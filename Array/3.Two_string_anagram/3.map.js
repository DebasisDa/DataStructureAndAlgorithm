function stringAnagram3(str1, str2) {
    var map = {};
    for (var i = 0; i < str1.length; i++) {
        map[str1.charAt(i)] = i + 1;
    }
    for (var i = 0; i < str2.length; i++) {
        if (map[str2.charAt(i)]) {
            delete map[str2.charAt(i)];
            console.log("After delete :::", map);
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(stringAnagram3('catk', 'actk'));
