var sortAlphabets = function (text) {
    return text.split('').sort().join('');
};
function stringAnagram2(str1, str2) {
    //Sorting string characters
    str1 = sortAlphabets(str1);
    str2 = sortAlphabets(str2);
    for (var i = 0; i < str1.length; i++) {
        if (str1.charAt(i) != str2.charAt(i)) {
            return false;
        }
    }
    return true;
}
console.log(stringAnagram2('cata', 'acta'));
