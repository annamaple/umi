class Person {
    constructor(name, age) {
        // 构造器this指的是实例对象
        this.name = name;
        this.age = age;
    }

    // 一般方法
    speak() {
        // speak方法放在了原型对象上
        // 通过Person实例调用speak时， speak中的this就是Person实例
        console.log(`我是${this.name}, ${this.age}岁`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade;
    }

    speak() {
        super.speak();
        console.log(`${this.grade}`)
    }

    study() {
        console.log(`${this.grade}的${this.name}在学习`);
    }
}

class SinglePerson extends Person {
    static getInstance() {
        return new SinglePerson("single", 11);
    }

    // 类中可以直接写赋值语句， 付下代码的含义是给SinglePerson添加值固定一个属性
    a = 1
    constructor(name, age) {
        super(name, age)
    }
}

/*
const p1 = new Person('anna', 12);
const p2 = new Person('an', 11);
console.log(p1)
console.log(p2)
p1.speak()
p2.speak()
// call重要作用，更改函数的this指向
p1.speak.call({age: 1, name: 2})
*/

const s1 = new Student('zhang', 11, "二年级");
console.log(s1)
s1.speak();
s1.study();
const single = SinglePerson.getInstance();
single.speak();
console.log(single)

/**
 * 总结：
 *  1. 类中的构造器不是必须写的， 要对实例进行一些初始化操作，如添加指定属性才写。
 *  2. 如果A类extends B类，且A类中写了构造器，那么A类构造器中的super是必须要写的。
 *  3. 类中所定义的方法，都是放在了类的原型对象上， 供实例区调用。
 */
