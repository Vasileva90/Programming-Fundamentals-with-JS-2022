function solve(catsData) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for (let catData of catsData) {
        let tokens = catData.split(" ");
        let catName = tokens[0];
        let catAge = tokens[1];
        let myCat = new Cat(catName, catAge);
        cats.push(myCat);
    }
    for (let myCat of cats) {
        myCat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);