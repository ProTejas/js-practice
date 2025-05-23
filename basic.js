/* -------------Easy Quetions----------------- */
const reverseString = (str) => { return str.split('').reverse().join('') };

const isPalindrome = (str) => { return str == str.split('').reverse().join('') ? `Palindrom` : `no palibdrom` };

const findMax = function (arr) {
    let maxNum = 0;
    for (let num of arr) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

const sumOfDigits = function (num) {
    return (num).toString().split('').reduce(function (total, current) {
        return Number(total) + Number(current)
    })
}
/* -------------Easy Quetions----------------- */

/* ------------ Medium Quetion------------------ */
function removeDuplicates(arr) {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}

function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }
    let maxNum = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > maxNum) { //num = 30 maxNum = 25 condition true
            secondLargest = maxNum; // secondLargest = 25
            maxNum = num; //maxNum = 30
        }
    }
    return `Maxnum: ${maxNum}, Secondnum: ${secondLargest}`;
}
// console.log(secondLargest([29, 10, 25, 5, 20, 1, 30]));

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const count = {};
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

/* console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));  */// false
// isAnagram('aab', 'abb');


function findMissingNumbers(arr, n) {
    const missing = [];
    const numSet = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missing.push(i);
        }
    }
    return missing;
}

// console.log(findMissingNumbers([2, 1, 3, 5, 6, 8], 8));

function flatArr(arr) {
    let result = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            result = result.concat(flatArr(el));
        } else {
            result.push(el);

        }
    }
    return result;
}

function rightHandTraingle(num) {
    let rows = num;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            line += " ";
        }
        // Add stars
        for (let k = 1; k <= i; k++) {
            Number(line += k);
        }
        console.log(line);
    }
}

let arr = [4, 5, 1, 2, 1, 4];
let dupli = [];
for (let i = 0; i <= arr.length; i++) {
    let currentChar = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            currentChar += 1;
        }
    }
    if(currentChar > 1){
        dupli.push(arr[i])
    }
    
}
console.log(dupli);


/* ------------ Medium Quetion------------------ */
