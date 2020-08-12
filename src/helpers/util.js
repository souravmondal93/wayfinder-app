export const getFormattedCoordinates = (coordinate) => {
  if (!(coordinate.hasOwnProperty('x') && coordinate.hasOwnProperty('y'))) {
    throw new Error(`Please pass a valid coordinate`);
  }

  return `(${coordinate.x}, ${coordinate.y})`;
};

export const mapIndexToCoordinate = (idx, boardX = 4, boardY = 4) => {
  const xOffset = 0, yOffset = 0, cellSide = 100;

  return {x: (((idx % boardX) * cellSide ) + xOffset), y: ((parseInt((idx / boardY), 10) * cellSide) + yOffset)};
};

export const changeFacingDirection = (currentCoordinate, nextCoordinate) => {
  const turnAngle = 90;
  const turnX = Math.sign(nextCoordinate.x - currentCoordinate.x);
  const turnY = Math.sign(nextCoordinate.y - currentCoordinate.y);
  
  return turnX ? (turnX * turnAngle) : turnY ? (turnY * turnAngle) : 0;
};