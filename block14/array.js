//only odds
const array1 = [2, 4, 6, 8, 11, 20, 15, 22];
const odds = [];
for (const num of array1) {
    if (num % 2 === 1) {
        odds.push(num);
    }
}
console.log(odds);
// for ( let i = 0; i < array1.length ; i++ )
//     console.log

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const odds2 = [];
for (const num of array2) {
    if (num % 2 === 1) {
        odds2.push(num);
    }
}
console.log(odds2);

const array3 = [70, 42, 55, 81, 21, 91, 34]
const odds3 = [];
for (const num of array3) {
    if (num % 2 === 1) {
        odds3.push(num);
    }
}
console.log(odds3);

const array4 = [2, 4, 6, 8, 11, 12]
const odds4 = [];
for (const num of array4) {
    if (num % 2 === 1) {
        odds4.push(num);
    }
}
console.log(odds4);


// Vowels Vs Consonant

// const vowels = ["a", "e", "i", "o", "u"];
// const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
// const string1 = ["hello"];


// Reverse array

const arrays1 = [1, 2, 3]
const reverse1 = arrays1.reverse();
console.log(reverse1)


const arrays2 = [1, 3, 5, 7, 9, 11]
const reverse2 = arrays2.reverse()
console.log(reverse2)


const arrays3 = [20, 50, 30, 60, 200]
const reverse3 = arrays3.reverse()
console.log(reverse3)


const arrays4 = [1, -1, 2, -3, 5, -8, 13]
const reverse4 = arrays4.reverse()
console.log(reverse4)

const fizz = num * 3
const buzz = num * 5
const fizzBuzz = num * 3 && num * 5
const num = 1++

