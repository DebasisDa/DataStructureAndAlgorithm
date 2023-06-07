function stringAnagram(str1, str2) {
    for (var i = 0; i < str1.length; i++) {
        var flag = false;
        for (var j = 0; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                flag = true;
                continue;
            }
        }
        if (!flag) {
            return false;
        }
    }
    return true;
}
console.log(stringAnagram('cata', 'actt'));
