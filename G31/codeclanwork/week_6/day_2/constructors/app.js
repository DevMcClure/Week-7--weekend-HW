const Pet = require('./pet.js');

const Person = require('./person.js');

const scooby = new Pet ('SCOOBY DOO', 'Dog');

const shaggy = new Person('shaggy rogers', scooby);

shaggy.feedPet('Scooby Snack');
shaggy.greet();