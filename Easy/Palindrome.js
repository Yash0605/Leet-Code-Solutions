var isPalindrome = function(x) {
    const str = x.toString();
    const reverseStr = str.split('').reverse().join('');
   
    return str == reverseStr;
};

isPalindrome(121);