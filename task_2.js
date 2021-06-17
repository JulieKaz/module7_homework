const hasKey = (str, obj) => str in obj;

let obj = {
    a: 1,
    b: 2,
    c: 3
};
let str = 'a';

console.log(hasKey(str, obj));