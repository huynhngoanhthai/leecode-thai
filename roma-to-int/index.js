/**
 * @param {string} s
 * @return {number}
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 */

var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0; 
    let current = 0; // I
    let prev = 0; // V
    // IV
    for (let index = s.length - 1; index >= 0; index--) {
        current = romanNumerals[s[index]];
        // console.log(prev, current);
        if (current >= prev){
            result += current;
        }
        else {
            result -= current;
        }
        prev = current;
    }
    // console.log(result);
};  

romanToInt("IV");
