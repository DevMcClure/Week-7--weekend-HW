const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function(){

    let taxi;

    beforeEach(function(){
        taxi = new Taxi('Toyota','Prius','Jen')
    });

    it('should have a manufacturer', function(){
        
        const actual = taxi.manufacturer;        //ACT
        assert.strictEqual(actual, 'Toyota');    //ASSERT
    });
    it('should have a model', function(){

        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');

    });

    it('should have a driver', function(){
        const actual = taxi.driver;
        assert.strictEqual(actual,'Jen');

    });

    describe('passengers', function(){
        
        it('should start with no passengers', function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        })

    });

    it('should be able to return the number of passengers', function(){
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 0);
    });

    it('should be able to add passengers', function(){
        taxi.addPassenger('Ash');
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 1)
    })

    it('should be able to remove a passenger by name', function(){
        taxi.addPassenger('Ash');
        taxi.addPassenger('Aqib');
        taxi.removePassengerByName('Aqib');
        const expected = (['Ash']);
        const actual = taxi.passengers;
        assert.deepStrictEqual(actual, expected);
    })

    it('should be able to remove all passemgers', function(){
        taxi.addPassenger('Ash');
        taxi.addPassenger('Aqib');
        taxi.removeAllPassengers();
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 0)
    })

});