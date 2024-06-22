
const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

const newArr = numbers.map(item => item.filter(itemFiltet => itemFiltet % 2 !== 1
))
console.log(newArr)