class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): void {
        console.log("I am " + this.name);
    }

    tellMyAge(): void {
        console.log("I am " + this.age + " years old");
    }
}

const john = new Person("John", 40);
john.tellMyName(); // Affiche : I am John
john.tellMyAge(); // Affiche : I am 40 years old

const mary = new Person("Mary", 35);
mary.tellMyName(); // Affiche : I am Mary
mary.tellMyAge(); // Affiche : I am 35 years old
