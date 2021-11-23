const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let trex;
  let trex2;
  let triceratop;

  beforeEach(function () {
    park = new Park ('Edinburgh ZOO', 10);
    trex = new Dinosaur('t-rex', 'carnivore', 100);
    trex2 = new Dinosaur('t-rex', 'carnivore', 90);
    triceratop = new Dinosaur('triceratop', 'herbivore', 90);
  })
  it('should have a name', function() {
    const actual = park.name;
    assert.equal(actual, 'Edinburgh ZOO')
    });

  it('should have a ticket price', function (){ 
    const actual = park.ticketPrice;
    assert.equal(actual, 10)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });  

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(trex);
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(trex);
    park.addDinosaur(triceratop);
    park.removeDinosaurBySpecies(trex);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [triceratop]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(trex);
    park.addDinosaur(triceratop);
    const actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, trex);

  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(triceratop);
    const actual = park.findBySpecies('t-rex');
    assert.deepEqual(actual, [trex, trex2]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(triceratop);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 280);
  });
  

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(triceratop);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 102200);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(triceratop);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 1022000);
  });

});
