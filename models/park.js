const Dinosaur = require('./dinosaur')

const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
  }

Park.prototype.addDinosaur = function (dinosaur) {
    return this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurBySpecies = function (dinosaurSpecies) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaurSpecies);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.findMostPopularDinosaur = function () {
    let mostPopularDinosaur = this.collectionOfDinosaurs[0];

    for (let dino in this.collectionOfDinosaurs) {
        if(dino.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay) {
            mostPopularDinosaur = dino;
        }
    }
    return mostPopularDinosaur;
};

Park.prototype.findBySpecies = function (searchedSpecies) {
    let found = [];

    for(let dino of this.collectionOfDinosaurs){
        if(dino.species === searchedSpecies){
            found.push(dino);
        }
    }
    return found;
};

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0;

    for(let dino of this.collectionOfDinosaurs){
        total += dino.guestsAttractedPerDay
    }
    return total;
}

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365;
}

Park.prototype.totalRevenuePerYear = function () {
    return this.totalVisitorsPerYear() * this.ticketPrice
}
  module.exports = Park;