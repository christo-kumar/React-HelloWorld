const GeneralAlgo = () => {
    helloWorld();
    getMaxChar("abbbddddccc");
    // console.log(revStr1("abcd"));
    // let fact = factorial(5);
    // console.log(fact);
    // Fibbonaci(8, 1, 0, 0);
    // console.log(palidrome("aba"));
    // console.log(isUniqueCharacter1("abcc"));
    // console.log(isUniqueCharacter2("abcd"));
    // console.log(urlifyString("Hello World"));
    // console.log(longestSubString("abca"));
    // console.log("*****++++++");
    // console.log(longestPalindrom("abtba"));
    // console.log(anagram("fired", "fried"));
    // anagramShort("fired", "fried");

    //removeDuplicate
    //Cipher Demo
}

const getMaxChar = (string) => {
    //write your code here...
    let charArray = Array.from(string)
    let charMap = new Map();
    let maxchar = '';
    let maxCount = 0;
    for (let char of charArray) {
        console.log(char)
        let count = charMap[char];
        if (count) {
            count = count + 1;
        } else {
            count = 0;
        }
        charMap[char] = count;
    }

    for (let key of charMap.keys()) {
        console.log(key);
        let num = charMap[key];
        if (num > maxCount) {
            maxCount = num;
            maxchar = key;
        }
    }
    return maxchar;
}

const helloWorld = () => {
    const obj = {
        a:1
    }
}

const anagramShort = (s, t) => {

    let sorted1 = [...s].sort((p1, p2) => {
        return p1.charCodeAt(0) - p2.charCodeAt(0);
    })
    let sorted2 = [...t].sort((p1, p2) => {
        return p1.charCodeAt(0) - p2.charCodeAt(0);
    })
    return sorted1.join("") === sorted2.join("");
}

const anagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    //fired, fried
    const getCharMap = (str) => {
        let charMap = new Map();
        for (let char of str) {
            let curVal = charMap.get(char);
            if (curVal === undefined) {
                charMap.set(char, 1);
            } else {
                charMap.set(char, ++curVal);
            }
        }
        return charMap;
    }

    let charMap1 = getCharMap(s);
    let charMap2 = getCharMap(t);
    for (let key in charMap1.keys) {
        if (charMap1[key] !== charMap2[key]) {
            return false;
        }
    }

    return true;
}

const longestPalindrom = (str) => {
    let startIndex = 0;
    let maxPal = 1;

    const spreadFromMiddle = (left, right) => {
        while (left > 0 && right < str.length && str[left] === str[right]) {
            let curPal = (right - left) + 1;
            if (curPal > maxPal) {
                maxPal = curPal;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        //spread from middle for odd
        spreadFromMiddle(i - 1, i + 1);
        //spread from middle for even
        spreadFromMiddle(i, i + 1);
    }
    return str.slice(startIndex, startIndex + maxPal);
}


const longestSubString = (str) => {
    let p1 = 0;
    let p2 = 1;
    let index = 0;
    let longest = 0;
    let currLen = 1;
    while (index < str.length) {
        if (str[p1] !== str[p2]) {
            currLen++;
            p2++;
            console.log(currLen);
        } else {
            longest = currLen > longest ? currLen : longest;
            currLen = (p2 - p1) - 1;
            p1++;
        }
        index++;
    }
    longest = currLen > longest ? currLen : longest;
    return longest;
}

const compressString = () => {

}

const urlifyString = (str) => {
    let charArray = [...str];
    for (let index = 0; index < charArray.length; index++) {
        if (charArray[index] === ' ') {
            charArray[index] = '%20';
        }
    }
    return charArray.join("");
}

const isUniqueCharacter1 = (str) => {
    let charMap = new Map();
    for (let char of str) {
        let val = charMap.get(char);
        if (val === undefined) {
            charMap.set(char, 1);
        } else {
            console.log("I am here for - " + char);
            return false;
        }
    }
    return true;
}

const isUniqueCharacter2 = (str) => {
    let array = new Array(128);
    array.fill(false, 0, 128);
    for (let index = 0; index < str.length; index++) {
        let ascii = str.charCodeAt(index);
        if (array[ascii]) {
            return false
        }
        array[ascii] = true;
    }
    return true;
}

const revStr1 = (str) => {
    let index = 0;
    let charArray = [...str];
    while (index < str.length / 2) {
        let p1 = index;
        let p2 = (str.length - 1) - index;
        let temp = charArray[p1];
        charArray[p1] = charArray[p2];
        charArray[p2] = temp;
        index++;
    }
    return charArray.join("");
}

const revStr = (str) => {
    let charArray = [...str];
    let last = str.length - 1;
    let mid = str.length / 2; //[] [] [] ~ 1, [] [] [] [] ~ 2
    for (let p1 = 0; p1 < mid; p1++) {
        let p2 = last - p1;
        let temp = charArray[p1];
        charArray[p1] = charArray[p2];
        charArray[p2] = temp;

    }
    return charArray.join("");
}

const palidrome = (str) => {
    let str1 = revStr(str);
    return str === str1;
}

const factorial = (num) => {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

const Fibbonaci = (till, current, sum, prevSum) => {
    if (current === till) {
        return 0;
    }
    if (current === 1) {
        console.log(0);
        return Fibbonaci(till, ++current, 1, 0);
    }
    console.log(sum + prevSum);
    return Fibbonaci(till, ++current, (sum + prevSum), sum);
}


export default GeneralAlgo;