/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let reversed = 0;
    let temp = x;
    while (temp > 0){
        reversed = reversed * 10 + temp%10;
        temp = ~~(temp / 10);
    };
    return reversed == x;
    
};