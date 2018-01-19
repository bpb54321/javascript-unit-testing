function checkForShip(player, coordinate) {
  let matchingCoordinates;
  let ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    matchingCoordinates = ship.locations.filter(function(actualCoordinate) {
      return ( (actualCoordinate[0] === coordinate[0]) && (actualCoordinate[1] === coordinate[1]) );
    });

    if (matchingCoordinates.length > 0) {
      return true; //Ship is hit
    }
  }

  return false;
}

module.exports.checkForShip = checkForShip;