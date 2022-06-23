
const Person = function(name,pet){
    this.name = name;
    this.pet = pet;
    
   
    }

Person.prototype.greet = function (){
    console.log(`Hi! My name is ${this.name}`);
    }

    
Person.prototype.feedPet = function (food) {
    const message = `${this.name} fed ${this.pet.name} a ${food}`;
    console.log(message)
    this.pet.eat(food);
}


const shaggy = new Person('shaggy Rogers');
// console.log('shaggy:', shaggy);
// console.log('shaggy:', shaggy.name)
const velma = new Person('Velma Dinkley')
velma.greet();
shaggy.greet();


console.log('shaggy:', shaggy);
console.log('velma:', velma)


module.exports = Person;