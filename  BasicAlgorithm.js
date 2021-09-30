// bài 1
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertToF(30);

// Bài 2

function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;


}

reverseString("hello");

// Bài 3

function factorialize(num) {
    for (var NUM = 1; num > 0; num--) {
        NUM *= num
    }
    return NUM;
}

factorialize(5);

// Bài4

function findLongestWordLength(str) {
    let tungu = str.split(' ');

    let tudainhat = 0;

    for (let i = 0; i < tungu.length; i++) {
        if (tungu[i].length > tudainhat) {
            tudainhat = tungu[i].length;
        }
    }
    return tudainhat;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Bai5
function largestOfFour(arr) {
    let ketqua = [];
    for (let a = 0; a < arr.length; a++) {
        let solonnhat = arr[a][0];
        for (let b = 1; b < arr[a].length; b++) {
            if (arr[a][b] > solonnhat) {
                solonnhat = arr[a][b];
            }
        }
        ketqua[a] = solonnhat;
    }
    return ketqua;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// Bài6

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// Bải7
function repeatStringNumTimes(str, num) {
    let result = "";
    while (num > 0) {
        result += str;
        num--;
    };
    return result;
}

repeatStringNumTimes("abc", 3);


// bài 8
function truncateString(str, num) {
    let result = str.length > num ? str.slice(0, num) + "..." : str;
    return result
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);





// bài 9. 

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }

    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// bài 10
function booWho(bool) {
    let test = typeof bool === "boolean"
    return test;
}

booWho(null);



