let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1)
// 展开一个数组
console.log(...arr1)
let arr2 = [11, 12, 13];
// 连接数组
let arr3 = [...arr1, ...arr2];
console.log(arr3)

// 在函数中使用
function sum(...nums) {
    return nums.reduce((preValue, curValue) => preValue + curValue);
}

console.log(sum(1, 2, 3))
// 复制对象 展开运算符不能展开一个对象
let person = {name: 'tom', age: 10}
// console.log(...person) // 报错
// 构造字面量对象时使用展开语法
let person2 = {...person};

// 复制对象的同时修改属性
let person3 = {...person, name: 'jack', address: 'earth'}
console.log(person3)


