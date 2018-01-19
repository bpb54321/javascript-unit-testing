const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;

describe('checkForShip', function() {
  const checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report a miss', function() {
    let player = {
      ships: [
        {
          locations: [[0, 0]],
        }
      ]
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should correctly report a hit', function() {
    let player = {
      ships: [
        {
          locations: [[0, 0]],
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
  });

  it('should handle ships located at more than one coordinate', function() {
    let player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]],
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', function() {
    let player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]],
        },
        {
          locations: [[1, 0], [1, 1]],
        },
        {
          locations: [[2, 0], [2, 1,], [2, 2], [2,3]],
        },
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [2, 3])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe('damageShip', function() {
  var damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', function() {
    var ship = {
      locations: [[0, 0]],
      damage: [],
    };

    var coordinate = [0, 0];

    damageShip(ship, [0, 0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal(coordinate);
  });
});