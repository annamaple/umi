class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(this)
    }

    speak2 = () => {
        console.log(this)
    }
}


const p1 = new Person('anna', 19);
// 通过Person实例调用speak时， speak中的this就是Person实例
p1.speak();
const x = p1.speak2;
console.log(x)
x();
