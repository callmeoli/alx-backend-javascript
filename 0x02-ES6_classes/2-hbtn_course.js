export default class ALXCourse {
    constructor(name, length, students){
        if (typeof name !== 'string'){
            throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'number'){
            throw new TypeError('Length must be number')
        }
        if (typeof students !== 'object'){
            throw new TypeError('students must be String')
        }
        this._name = name,
        this._length = length,
        this._students = students
    }
    get name(){
        return `${this._name}`
    }
    get length(){
        return `${this._length}`
    }
    get students(){
        return `${this._students}`
    }
    set name(name){
        if (typeof name !== 'string'){
            throw new TypeError('Name must be a string');
        }
        this._name = name
    }
    set length(length){
        if (typeof length !== 'number'){
            throw new TypeError('Length must be number')
        }
        this._length = length
    }
    set students(students){
        if (typeof students !== 'object'){
            throw new TypeError('students must be String')
        }
        this._students = students
    }
}
let fullStack = new ALXCourse('fullstack', 6, ['ten', 'two'])
const c1 = new ALXCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new ALXCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}
